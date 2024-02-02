const twLabelClasses = 'prose dark:prose-invert font-bold mb-2'
const twInputClasses = 'dark:bg-slate-950 dark:text-slate-100 p-3 mb-2'

interface InputProps {
  id?: string
  label?: string
  value?: string
  className?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ id='', label='', value='', className='', onChange=()=>{} }: InputProps) => <>
  {label && <label className={twLabelClasses} htmlFor={id}>{label}</label>}
  <input
    id={id}
    type="text"
    value={value}
    onChange={onChange}
    className={twInputClasses}
  />
</>

export default Input
