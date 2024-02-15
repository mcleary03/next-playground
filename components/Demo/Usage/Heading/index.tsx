import Heading from '@/components/Heading'

interface UsageProps {
  componentName: string
}

const props = `heading: string
subHeading?: string
level?: HeadingLevel
className?: string
`

const codeWithHeading = `<Heading
  level={1}
  heading="Heading"
/>`

const codeWithSubHeading = `<Heading
  level={1}
  heading="My Heading"
  subHeading="My Sub Heading"
/>`

type ComponentUsage = {
  componentName: string
  props: string
  examples: [
    {
      description: string
      code: string
    }
  ]
}

const Usage = ({ componentName }: UsageProps) => {
  const demoComponent = componentName as unknown as JSX.IntrinsicElements

  return (
    <section>
      <section className="my-8">
        <Heading level={2} heading="Props" />
        <pre className="prose">
          {props}
        </pre>
      </section>
      <hr className="border-4 border-accent-blue-light" />
      <section className="my-8">
        <Heading level={2} heading="Usage" />
        <Heading
          level={3}
          heading="Heading Only"
        />
        This is what plain text looks like underneath a Heading
        <pre className="prose">
          {codeWithHeading}
        </pre>
        <Heading
          level={3}
          heading="With Sub Heading"
          subHeading="This is a sub heading"
        />
        This is what plain text looks like underneath a SubHeading
        <pre className="prose">
          {codeWithSubHeading}
        </pre>
      </section>
    </section>
  )
}

// const Usage = ({ componentName }: UsageProps) => {
//   const demoComponent = componentName as unknown as JSX.IntrinsicElements

//   return (
//     <section>
//       <section className="my-8">
//         <Heading level={2} heading="Props" />
//         <pre className="prose">
//           {props}
//         </pre>
//       </section>
//       <section className="my-8">
//         <Heading level={2} heading="Usage" />
//         <Heading
//           level={3}
//           heading="Heading Only"
//         />
//         <pre>
//           {codeWithHeading}
//         </pre>
//         <Heading
//           level={3}
//           heading="With Sub Heading"
//         />
//         <pre>
//           {codeWithSubHeading}
//         </pre>
//       </section>
//     </section>
//   )
// }

export default Usage
