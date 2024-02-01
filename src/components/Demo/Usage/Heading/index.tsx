import Heading from "@/components/Heading"

interface UsageProps {
  componentName: string
}

const code = `<Heading
  level={1}
  heading="Heading"
/>`

const Usage = ({ componentName }: UsageProps) => {

  return (
    <section>
      <section className="my-8">
        <Heading level={2} heading="Props" />
        <ul className="prose dark:prose-invert">
          <li>heading: string</li>
          <li>subHeading?: string</li>
          <li>level?: HeadingLevel</li>
          <li>className?: string</li>
        </ul>
      </section>
      <section className="my-8">
        <Heading
          level={2}
          heading="Example"
        />
        <pre>
          {code}
        </pre>
      </section>
    </section>
  )
}

export default Usage
