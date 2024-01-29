interface ButtonProps {
  children?: string
  type?: 'button' | 'submit'
  color?: 'primary' | 'secondary'
  classes?: string;
}


const Button = ({ children, type = 'button', color = 'primary', classes = '' }: ButtonProps) => {
  const pallette = {
    primary: color === 'primary' ? 'primary' : 'secondary',
    accent: 'primary' ? 'secondary' : 'primary',
  }

  const className = `
    border-${pallette.accent}
    border-2
    p-2
    bg-${pallette.primary}
    text-${pallette.accent}
    ${classes}
  `

  return <button type={type} className={className}>{children}</button>
}

export default Button
