import Heading from "@/components/Heading"

interface VariantsProps {
  ComponentName: string
}

const Variants = ({ ComponentName }: VariantsProps) => {
  const UsageComponent = `import ${ComponentName} from "@/components/Demo/Usage/${ComponentName}"`

  return <>
    <Heading heading="Variants" subHeading={ComponentName} />
    <ComponentName />
    <UsageComponent />
  </>
}

export default Variants
