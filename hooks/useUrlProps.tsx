import { useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ComponentDefinition } from "@/components/Heading"
import { useSearchParams } from "next/navigation"

const useUrlProps = (componentDefinition: ComponentDefinition) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const updateQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)

    return params.toString()
  }, [searchParams])

  const updateUrlProp = useCallback((prop: string, value: string) => {
    return router.replace(`${pathname}?${updateQueryString(prop, value)}`)
  }, [pathname])

  const urlProps = Object.entries(componentDefinition).reduce((acc, [prop, val]) => {
    if (prop !== 'className') acc[prop] = searchParams.get(prop) || val.default
    return acc
  }, {} as Record<string, any>)

  return [urlProps, updateUrlProp] as const
}

export default useUrlProps
