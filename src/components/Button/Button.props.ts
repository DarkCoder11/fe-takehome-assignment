import { MouseEventHandler, ReactNode } from 'react'

export type ButtonProps = {
  className?: string
  variant?: ButtonVariant
  type?: ButtonType
  label?: ReactNode
  icon?: SvgAsset.Element
  disabled?: boolean
} & Partial<ButtonCallbacks>

export type ButtonType = Required<JSX.IntrinsicElements['button']>['type']

export type ButtonVariant =
  | 'primary'
  | 'secondary'

export type ButtonCallbacks = {
  onClick: MouseEventHandler<HTMLButtonElement>
}
