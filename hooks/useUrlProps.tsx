import { ComponentDefinition } from "@/components/Heading"
import { useSearchParams } from "next/navigation"

const useUrlProps = (componentDefinition: ComponentDefinition) => {
  const searchParams = useSearchParams()

  const props = Object.entries(componentDefinition).reduce((acc, [prop, val]) => {
    if (prop !== 'className') acc[prop] = searchParams.get(prop) || val.default
    return acc
  }, {} as Record<string, any>)

  return props
}

export default useUrlProps
