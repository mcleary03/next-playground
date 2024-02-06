interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children?: string
  type?: 'button' | 'submit'
  color?: 'primary' | 'secondary'
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl'
  classes?: string;
}

const Button = ({
  children,
  onClick,
  type = 'button',
  color = 'primary',
  size,
  classes = ''
}: ButtonProps) => {
  const pallette = {
    primary: color === 'primary' ? 'primary' : 'secondary',
    accent: color === 'primary' ? 'secondary' : 'primary',
  }

  return <button
    type={type}
    className={`
      border-2
      p-2
      ${classes}
    `}
    onClick={onClick}>
    <span className="prose dark:prose-invert">
      {children}
    </span>
  </button>
}

export default Button
