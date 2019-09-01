/**
 * Collection for Array
 * @desczh
 * 数组类型集合
 * @file
 */
import * as t from 'io-ts'
import { NonEmptyArray, fromArray } from 'fp-ts/lib/NonEmptyArray'
import { isNonEmpty } from 'fp-ts/lib/Array'
import { either } from 'fp-ts/lib/Either'
import { isNone } from 'fp-ts/lib/Option'

/**
 * @since 0.2.0
 */
export interface NonEmptyArrayC<C extends t.Mixed>
  extends t.Type<NonEmptyArray<t.TypeOf<C>>, Array<t.OutputOf<C>>, unknown> { }

/**
 * Get A non empty array
 * @desczh
 * 得到一个非空数组
 * @example
 * import { nonEmptyArray } from 'macoolka-io'
 * import { isLeft } from 'fp-ts/lib/Either'
 *
 * const input:string[] = []
 * assert(isLeft(nonEmptyArray.decode(input)))
 *
 * @since 0.2.0
 */
export function nonEmptyArray<C extends t.Mixed>(
  codec: C,
  name: string = `NonEmptyArray<${codec.name}>`
): NonEmptyArrayC<C> {
  const arr = t.array(codec)
  return new t.Type(
    name,
    (u): u is NonEmptyArray<t.TypeOf<C>> => arr.is(u) && isNonEmpty(u),
    (u, c) =>
      either.chain(arr.validate(u, c), as => {
        const onea = fromArray(as)
        return isNone(onea) ? t.failure(u, c) : t.success(onea.value)
      }),
    nea => arr.encode(nea)
  )
}
