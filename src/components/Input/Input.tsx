import { ChangeEventHandler, forwardRef, useCallback } from 'react'

import cx from 'classnames'

import { INPUT_VARIANT_CLASSES } from './Input.const'
import { InputProps } from './Input.props'

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  value,
  name,
  readOnly,
  required,
  onChange,
  type = 'text',
  className = '',
  disabled = false,
  placeholder = '',
  variant = 'primary',
}, ref) => {
  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    onChange?.(event.target.value)
  }, [onChange])

  return (
    <input
      className={cx(
        'tw-flex tw-items-center tw-gap-2 tw-min-h-[50px]',
        'tw-outline-none',
        INPUT_VARIANT_CLASSES[variant],
        disabled && 'tw-opacity-70 tw-cursor-not-allowed',
        className,
      )}
      ref={ref}
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
})
