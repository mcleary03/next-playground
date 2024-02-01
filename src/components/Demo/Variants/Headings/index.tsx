import Heading, { HeadingLevel } from "@/components/Heading"

interface HeadingsProps {
  heading?: string
  subHeading?: string
}

const Headings = ({ heading, subHeading }: HeadingsProps) => (
  <section>
    <Heading heading="Heading Component" subHeading="Variants" className="mb-8" />
    {
      (new Array(6)).fill(0).map((_, i) => (
        <Heading
          key={i + 1}
          level={i + 1 as HeadingLevel}
          heading={heading || `Heading Level ${i + 1}`}
          subHeading={subHeading || 'Sub Heading'}
        />
      ))
    }
  </section>
)


export default Headings
