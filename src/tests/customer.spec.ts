import * as t from '../i18nIO'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'
import buildI18n from 'macoolka-i18n'
export const defaultOption = {
    defaultLanguage: 'en',
    locale: 'en',
    languages: ['en', 'zh'],
    data: {
        en: {
            'macoolka.customer.error': 'error value:{value}'
        },
        zh: {
            'macoolka.customer.error': '错误的值 :{value}'
        },
    }
}
const customerI18n=buildI18n(defaultOption)
/**
 * Customer a i18n codec
 */
const customer = new t.Type<string>(
    'customer',
    t.string.is,
    (u, c) => {
        return pipe(
            t.string.validate(u, c),
            E.chain(_ => {
                return u === 'abc' ?
                    t.failMessage<string>(customerI18n({
                        id: 'macoolka.customer.error',
                        value: {
                            value: u
                        }
                    }), c)
                    : t.success<any>(u)
            })
        )

    },
    t.string.encode,
)

describe('customer i18n io', () => {
    it('ok', () => {
        const value = 'ok'
        pipe(
            customer.decode(value),
            as => expect(E.isRight(as)).toBeTruthy()
        )
    })
    it('error default', () => {
        const value = 'abc'
        pipe(
            customer.decode(value),
            as => {
                expect(E.isLeft(as)).toBeTruthy()
                return as
            },
            E.mapLeft(a => {
                expect(t.show(a)({ i18n: defaultOption })).toEqual(`error value:abc : customer`)
            })
        )
    })
    it('error zh', () => {
        const value = 'abc'
        pipe(
            customer.decode(value),
            as => {
                expect(E.isLeft(as)).toBeTruthy()
                return as
            },
            E.mapLeft(a => {
                expect(t.show(a)({ i18n: { ...defaultOption, locale: 'zh' } })).toEqual(`错误的值 :abc : customer`)
            })
        )
    })
    it('error macoolka-io', () => {
        const value = 1
        pipe(
            customer.decode(value),
            as => {
                expect(E.isLeft(as)).toBeTruthy()
                return as
            },
            E.mapLeft(a => {
                expect(t.show(a)({ i18n: { ...defaultOption, locale: 'zh' } })).toEqual(`无效的值1 : customer`)
            })
        )
    })

})