interface HeadingProps {
  heading: string
  subHeading: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading = ({ heading, subHeading, level = 1 }: HeadingProps) => {
  type Heading = `h${typeof level}`
  type HeadingSize = {
    text: string,
    margin: string
  }

  const HeadingTag = `h${level}` as Heading
  const SubHeadingTag = `h${level + 1}` as Heading

  const sizes: Record<Heading, HeadingSize> = {
    h1: {
      text: '6xl',
      margin: '4',
    },
    h2: {
      text: '5xl',
      margin: '4',
    },
    h3: {
      text: '6xl',
      margin: '3',
    },
    h4: {
      text: '6xl',
      margin: '3',
    },
    h5: {
      text: '6xl',
      margin: '2',
    },
    h6: {
      text: '6xl',
      margin: '2',
    },
  }

  return <>
    <HeadingTag className={`text-${sizes[HeadingTag].text} mb-${sizes[HeadingTag].margin} font-bold`}>{heading}</HeadingTag>
    <SubHeadingTag className="text-4xl">{subHeading}</SubHeadingTag>
  </>
}

export default Heading
