import { twMerge } from "tailwind-merge"

interface InputProps {
  id?: string
  name?: string
  type?: string
  label?: string
  value?: string | number
  min?: number
  max?: number
  size?: number | 'variable'
  labelClassName?: string
  className?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  id,
  name,
  type='text',
  label,
  value,
  min,
  max,
  size,
  labelClassName,
  className,
  onChange=()=>{}
}: InputProps) => {
  return (
    <>
      {
        label && (
          <label
            className={twMerge('prose font-bold mb-2', labelClassName)}
            htmlFor={id}>{label}
          </label>
        )
      }
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={twMerge('bg-secondary-bg text-white p-3 mb-2', className)}
        size={size === 'variable' ? String(value).length : size as number}
        min={type === 'number' ? min : undefined}
        max={type === 'number' ? max : undefined}
      />
    </>
  )
}

export default Input
