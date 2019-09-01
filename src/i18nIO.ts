/**
 * I18n io
 * @desczh
 * 国际化IO
 * @file
 */
import * as t from './io'
import monidI18N, { Message } from './i18n'
import { pipe } from 'fp-ts/lib/pipeable'
import * as O from 'fp-ts/lib/Option'
import { MessageInfo, MonidI18N } from 'macoolka-i18n'
import * as A from 'fp-ts/lib/Array'
export * from './io'
import { isObject } from 'macoolka-predicate'
import { get } from 'macoolka-object'
/**
 * @since 0.2.0
 */
export type MessageValue = {
  _kind: 'message',
  messages: Array<MessageInfo>
}
const isMessageValue = (a: unknown): a is MessageValue => {
  return isObject(a) && get(a,'_kind') === 'message'
}
/**
 * Parse Erros(contains message) to MonidI18N
 * @desczh
 * 解析包含Message的Erros到MonidI18N
 * @since 0.2.0
 */
export const show = (as: t.Errors): MonidI18N => p => {
   return t.show(as, {
    showDecoder: type => {
      return pipe(
        type,
        O.fromPredicate(isMessageEncode),
        O.map(a => a.message(p))
      )
    },
    showValue: value => pipe(
      value,
      O.fromPredicate(isMessageValue),
      O.map(v => pipe(
        v.messages,
        A.map(message => showMessageInfo(message)(p)),
        as => as.join('\n')
      )),
      result =>
        O.isNone(result)
          ? O.some(
            monidI18N({
              id: 'macoolka.io.invlalid',
              value: { value: t.formatValue(value) }
            })(p))
          : result
    )
  })
}
/**
 * @since 0.2.0
 */
export const failMessage = <T>(messages: Array<MessageInfo>, context: t.Context, message?: string | undefined) =>
  t.failure<T>({ _kind: 'message', messages }, context, message)

const showMessage = (message: Message): MonidI18N => i18n => {
  return monidI18N(message)(i18n)
}
/**
 * @since 0.2.0
 */
const showMessageInfo = (message: MessageInfo): MonidI18N => i18n => {
  return monidI18N(message as any)(i18n)
}
const isMessageEncode = (a: unknown): a is MessageType<any> => isObject(a) && get(a,'_kind') === 'message'
/**
 * @since 0.2.0
 */
export type EncodeMessage = {
  _kind: 'messageType'
  message: MonidI18N
}
/**
 * @since 0.2.0
 */
export type MessageType<A, O = A, I = unknown> =
  t.Type<A, O, I> & EncodeMessage
/**
 * @since 0.2.0
 */
export interface MessageTypeParam<A, O = A, I = unknown> {
  type: t.Type<A, O, I>,
  message: MonidI18N,

}
/**
 * Add message to a type
 * @desczh
 * 给一个类型增加message
 * @since 0.2.0
 */
export function withMessage<A, O = A, I = unknown>({
  type,
  message
}: MessageTypeParam<A, O, I>): MessageType<A, O, I> {

  return {
    ...(type as any),
    _kind: 'message',
    message

  }
}
/**
 * @since 0.2.0
 */
export const string = withMessage({
  type: t.string,
  message: showMessage({
    id: 'macoolka.io.string'
  })
})
/**
 * @since 0.2.0
 */
export const number = withMessage({
  type: t.number,
  message: showMessage({
    id: 'macoolka.io.number'
  })
})
/**
 * @since 0.2.0
 */
export const boolean = withMessage({
  type: t.boolean,
  message: showMessage({
    id: 'macoolka.io.boolean'
  })
})
/**
 * @since 0.2.0
 */
export const Int = withMessage({
  type: t.Int,
  message: showMessage({
    id: 'macoolka.io.integer'
  })
})

export {
  Int as int
}
/**
 * @since 0.2.0
 */
export const dateFromISOString = withMessage({
  type: t.dateFromISOString,
  message: showMessage({
    id: 'macoolka.io.dateFromISOString'
  })
})
/**
 * @since 0.2.0
 */
export const dateFromNumber = withMessage({
  type: t.dateFromNumber,
  message: showMessage({
    id: 'macoolka.io.dateFromNumber'
  })
})
/**
 * @since 0.2.0
 */
export const dateFromUnixTime = withMessage({
  type: t.dateFromUnixTime,
  message: showMessage({
    id: 'macoolka.io.dateFromUnixTime'
  })
})
/**
 * @since 0.2.0
 */
export const uuid = withMessage({
  type: t.uuid,
  message: showMessage({
    id: 'macoolka.io.uuid'
  })
})
/**
 * @since 0.2.0
 */
export const ipv4 = withMessage({
  type: t.ipv4,
  message: showMessage({
    id: 'macoolka.io.ipv4'
  })
})
/**
 * @since 0.2.0
 */
export const ipv6 = withMessage({
  type: t.ipv6,
  message: showMessage({
    id: 'macoolka.io.ipv6'
  })
})
/**
 * @since 0.2.0
 */
export const email = withMessage({
  type: t.email,
  message: showMessage({
    id: 'macoolka.io.email'
  })
})
/**
 * @since 0.2.0
 */
export const url = withMessage({
  type: t.url,
  message: showMessage({
    id: 'macoolka.io.url'
  })
})
/**
 * @since 0.2.0
 */
export const nonEmptyString = withMessage({
  type: t.nonEmptyString,
  message: showMessage({
    id: 'macoolka.io.nonEmptyString'
  })
})
/**
 * @since 0.2.0
 */
export const nonEmptyArray = <C extends t.Mixed>(codec: C, name?: string) => {
  const _showMessage: MonidI18N = p => {
    const value = pipe(
      codec,
      O.fromPredicate(isMessageEncode),
      O.map(type => type.message(p)),
      O.getOrElse(() => codec.name)
    )
    return showMessage({
      id: 'macoolka.io.nonEmptyArray',
      value: {
        value
      }
    })(p)
  }
  return withMessage({
    type: t.nonEmptyArray(codec, name),
    message: _showMessage
  })
}
/**
 * @since 0.2.0
 */
export const array = <C extends t.Mixed>(codec: C, name?: string) => {
  const _showMessage: MonidI18N = p => {
    const value = pipe(
      codec,
      O.fromPredicate(isMessageEncode),
      O.map(type => type.message(p)),
      O.getOrElse(() => codec.name)
    )
    return showMessage({
      id: 'macoolka.io.array',
      value: {
        value
      }
    })(p)
  }
  return withMessage({
    type: t.array(codec, name),
    message: _showMessage
  })
}

const void1 = withMessage({
  type: t.void,
  message: showMessage({
    id: 'macoolka.io.void'
  })
})
export {
  void1 as void
}
/**
 * @since 0.2.0
 */
export const stringMatch = (value: RegExp) => withMessage({
  type: t.stringMatch(value),
  message: showMessage({
    id: 'macoolka.io.string.match',
    value: {
      value
    }
  })
})
/**
 * @since 0.2.0
 */
export const stringMaxLength = (value: number) => withMessage({
  type: t.stringMaxLength(value),
  message: showMessage({
    id: 'macoolka.io.string.maxLength',
    value: {
      value
    }
  })
})
/**
 * @since 0.2.0
 */
export const stringMinLength = (value: number) => withMessage({
  type: t.stringMinLength(value),
  message: showMessage({
    id: 'macoolka.io.string.minLength',
    value: {
      value
    }
  })
})
/**
 * @since 0.2.0
 */
export const numberMaxValue = (value: number) => withMessage({
  type: t.numberMaxValue(value),
  message: showMessage({
    id: 'macoolka.io.number.maxValue',
    value: {
      value
    }
  })
})
/**
 * @since 0.2.0
 */
export const numberMinValue = (value: number) => withMessage({
  type: t.numberMinValue(value),
  message: showMessage({
    id: 'macoolka.io.number.minValue',
    value: {
      value
    }
  })
})
/**
 * @since 0.2.0
 */
export const literal = <V extends string | number | boolean>(value: V, name?: string) =>
  withMessage({
    type: t.literal(value, name),
    message: showMessage({
      id: 'macoolka.io.literal',
      value: {
        value
      }
    })
  })
