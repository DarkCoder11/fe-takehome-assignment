import cx from 'classnames'

import { ButtonProps } from './Button.props'

export const Button = ({
  icon,
  onClick,
  label = '',
  className = '',
  type = 'button',
  disabled = false,
  variant = 'primary',
}: ButtonProps) => {
  const variantClasses = {
    primary: cx('tw-bg-primaryBlack tw-text-white tw-font-semibold tw-text-base tw-leading-6', {
      'tw-opacity-60': disabled,
    }),
    secondary: cx(
      'tw-bg-bg tw-text-black',
      {
        'tw-text-gray-500': disabled,
      },
    ),
  }

  return (
    <button
      className={cx(
        'tw-flex tw-items-center tw-justify-center tw-transition-all tw-duration-400',
        { 'tw-cursor-not-allowed': disabled },
        variantClasses[variant],
        className,
      )}
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {label}
      {icon}
    </button>
  )
}
