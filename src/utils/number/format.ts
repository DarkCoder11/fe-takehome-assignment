import _entries from 'lodash/entries'
import _isInteger from 'lodash/isInteger'
import _isNaN from 'lodash/isNaN'
import _isNumber from 'lodash/isNumber'
import _map from 'lodash/map'
import _reduce from 'lodash/reduce'
import _toNumber from 'lodash/toNumber'

type FormatValue =
  | number
  | string
  | null
  | undefined

type Type =
  | 'default'
  | 'crypto'

type Action =
  | 'high_prec_view'
  | 'view'
  | 'edit'

type FormatMap<Value> = Record<
Type,
Record<Action, Value>
>

type Options = FormatMap<Intl.NumberFormatOptions>
type Formatters = FormatMap<Intl.NumberFormat>

const OPTIONS: Options = {
  default: {
    high_prec_view: {},
    view: {},
    edit: {},
  },
  crypto: {
    high_prec_view: {
      minimumFractionDigits: 0,
      maximumFractionDigits: 8,
      maximumSignificantDigits: 8,
    },
    view: {
      minimumFractionDigits: 0,
      maximumFractionDigits: 8,
      maximumSignificantDigits: 8,
    },
    edit: {
      minimumFractionDigits: 0,
      maximumFractionDigits: 8,
    },
  },
}

const FORMATTERS = _reduce(
  _entries(OPTIONS),
  (formatters, [type, optsByAction]) => ({
    ...formatters,
    [type]: Object.fromEntries(
      _map(
        _entries(optsByAction),
        ([key, options]) => ([
          key,
          new Intl.NumberFormat('en-US', options),
        ]),
      ),
    ),
  }),
  {} as Formatters,
)

export const format = (
  value: FormatValue,
  type: Type = 'default',
  action: Action = 'view',
  withSign = false,
) => {
  const isNumeric = _isNumber(value) && !_isNaN(value)
  let number = isNumeric ? value as number : _toNumber(value)

  if (!isNumeric) {
    if (action === 'edit') {
      return ''
    }

    number = 0
  }

  const formattable = withSign
    ? Math.abs(number)
    : number

  const formatted = FORMATTERS[type][action].format(formattable)

  if (withSign) {
    let sign = ''

    if (number < 0) {
      sign = '-'
    } else if (number > 0) {
      sign = '+'
    }

    return `${sign}${formatted}`
  }

  return formatted
}

export const formatDefaultView = (
  value: FormatValue,
  withSign?: boolean,
) => format(value, undefined, undefined, withSign)

export const formatCryptoView = (
  value: FormatValue,
  withSign?: boolean,
) => format(value, 'crypto', 'view', withSign)

export const formatCryptoHighPrecView = (
  value: FormatValue,
  withSign?: boolean,
) => format(value, 'crypto', 'high_prec_view', withSign)

export const formatCryptoEdit = (
  value: FormatValue,
  withSign?: boolean,
) => format(value, 'crypto', 'edit', withSign)

export const getPrecisedNumber = (value: number, precision = 2) => {
  const numValue = !_isNumber(value) ? _toNumber(value) : value
  const isValueInteger = _isInteger(numValue)
  const resultValue = isValueInteger ? numValue : numValue?.toFixed(precision)

  return resultValue
}
