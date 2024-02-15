"use client"

import Heading, { HeadingDefinition } from "components/Heading"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

const HeadingDisplay = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    if (!params.has('level'))  params.set('level', '1')
    if (!params.has('heading')) params.set('heading', 'Example Heading')
    if (!params.has('subheading')) params.set('subheading', 'Example Sub Heading')
    router.replace(`${pathname}?${params.toString()}`)
  }, [])

  return (
    <section>
      <Heading
        level={Number(searchParams.get('level')) as typeof HeadingDefinition.level.typeof}
        heading={searchParams.get('heading') || ''}
        subHeading={searchParams.get('subHeading') || ''}
      />
    </section>
  )
}

export default HeadingDisplay
