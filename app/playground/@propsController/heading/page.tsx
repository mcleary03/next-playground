"use client"

import { useCallback } from "react"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Heading, { HeadingDefinition } from "@/components/Heading"
import Input from "@/components/Input"
import useUrlProps from "@/hooks/useUrlProps"

const HeadingDisplay = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const props = useUrlProps(HeadingDefinition)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return (
    <>
      <Heading heading="Props" className="text-center" />
      <div className="grid grid-cols-[max-content_auto] gap-2 items-center">
        {
          Object.entries(props).map(([prop]) => (
            <Input
              key={prop}
              type={typeof HeadingDefinition[prop as keyof typeof HeadingDefinition].typeof === 'number' ? 'number' : 'text'}
              label={prop}
              labelClassName="text-xl text-right"
              value={searchParams.get(prop) as string}
              onChange={(e) => router.replace(`${pathname}?${createQueryString(prop, e.target.value)}`)}
            />
          ))
        }
      </div>
    </>
  )
}

export default HeadingDisplay
