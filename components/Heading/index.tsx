"use client"


export type ComponentDefinition = {
  [propName: string]: {
    isRequired: boolean
    default?: any
    typeof: any
  }
}

const HeadingLevel = [1, 2, 3, 4, 5, 6] as const

export const HeadingDefinition: ComponentDefinition = {
  heading: {
    isRequired: true,
    typeof: String.prototype
  },
  subHeading: {
    isRequired: false,
    typeof: String.prototype
  },
  level: {
    isRequired: false,
    default: 1,
    typeof: Number.prototype
  },
  className: {
    isRequired: false,
    default: '',
    typeof: String.prototype
  }
}
export interface HeadingProps {
  heading: typeof HeadingDefinition.heading.typeof
  subHeading?: typeof HeadingDefinition.subHeading.typeof
  level?: typeof HeadingLevel[number]
  className?: typeof HeadingDefinition.className.typeof
}

const Heading = ({
  heading,
  subHeading,
  level=HeadingDefinition.level.default,
  className=HeadingDefinition.className.default
}: HeadingProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  return <header className={`${`
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
    prose-p:has-[h1,h2,h3,h4,h5,h6]:text-accent-purple-dark
    my-4
  `} ${className}`}>
    <HeadingTag>{heading}</HeadingTag>
    <p>{subHeading}</p>
  </header>
}

export default Heading
