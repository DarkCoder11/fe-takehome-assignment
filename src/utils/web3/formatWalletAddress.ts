import _size from 'lodash/size'
import { Address } from 'viem'

const ADDRESS_SIZE_THRESHOLD = 10
const ADDRESS_THUMB_SPLITTER = '...'

export const formatWalletAddress = (
  value: Address | string | null | undefined,
  sizeThreshold = ADDRESS_SIZE_THRESHOLD,
) => {
  if (!value) {
    return ''
  }

  const size = _size(value)

  if (size > sizeThreshold) {
    const partCharsCount = Math.ceil((sizeThreshold - 2) / 2)
    const prefix = value.substring(0, partCharsCount)
    const suffix = value.substring(size - partCharsCount)

    return `${prefix}${ADDRESS_THUMB_SPLITTER}${suffix}`
  }

  return value
}
