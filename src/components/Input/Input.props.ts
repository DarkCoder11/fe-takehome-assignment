import { HTMLInputTypeAttribute } from 'react'

export type InputProps = Partial<{
  value: string
  name: string
  disabled: boolean
  required: boolean
  readOnly: boolean
  className: string
  placeholder: string
  variant: InputVariant
  type: HTMLInputTypeAttribute
  onChange: (nextValue: string) => void
}>

export type InputVariant =
  | 'primary'
  | 'secondary'

export type InputVariantClasses = {
  [key in InputVariant]: string
}
