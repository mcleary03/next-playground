export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
export interface HeadingProps {
  heading: string
  subHeading?: string
  level?: HeadingLevel
  className?: string
}

const Heading = ({ heading, subHeading, level=1, className='' }: HeadingProps) => {
  type Heading = `h${typeof level}`
  const HeadingTag: Heading = `h${level}`

  const twClasses = `
    prose
    dark:prose-invert
    prose-headings:m-0
    prose-headings:font-bold
    prose-h1:text-6xl
    prose-h2:text-5xl
    prose-h3:text-4xl
    prose-h4:text-3xl
    prose-h5:text-2xl
    prose-h6:text-xl
    prose-h1:mb-4
    prose-h2:mb-4
    prose-h3:mb-3
    prose-h4:mb-3
    prose-h5:mb-2
    prose-h6:mb-2
    prose-p:m-0
    prose-p:font-semibold
    prose-p:has-[h1]:text-4xl
    prose-p:has-[h2]:text-3xl
    prose-p:has-[h3]:text-2xl
    prose-p:has-[h4]:text-xl
    prose-p:has-[h5]:text-lg
    prose-p:has-[h6]:text-base
    my-4
  `

  return <header className={twClasses + className}>
    <HeadingTag>{heading}</HeadingTag>
    <p>{subHeading}</p>
  </header>
}

export default Heading
