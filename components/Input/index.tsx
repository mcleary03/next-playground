interface InputProps {
  id?: string
  label?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ id='', label='', value='', onChange=()=>{} }: InputProps) => <>
  {
    label && (
      <label
        className="prose font-bold mb-2"
        htmlFor={id}>{label}
      </label>
    )
  }
  <input
    id={id}
    type="text"
    value={value}
    onChange={onChange}
    className="bg-secondary-bg text-white p-3 mb-2"
  />
</>

export default Input
