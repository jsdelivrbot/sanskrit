import { observable, asReference } from 'mobx'

import type { FSize, FPosition } from '../utils'
import type { Element } from './element'

export type ElementSlot = {
  id: string,
  position: FPosition,
  size: FSize,
  elements: Array<Element<any>>
}

export type ElementSlotParams = {
  id: string,
  position: FPosition,
  size: FSize
}

export default function mkElementSlot ({ id, position, size }: ElementSlotParams): ElementSlot {
  return observable({
    id: asReference(id),
    position,
    size
  })
}
