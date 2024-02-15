"use client"

import { useCallback } from "react"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Input from "@/components/Input"
import Heading from "@/components/Heading"

const HeadingCode = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.replace(`${pathname}?${createQueryString('level', e.target.value)}`)
  }

  const handleHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.replace(`${pathname}?${createQueryString('heading', e.target.value)}`)
  }

  const handleSubHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    router.replace(`${pathname}?${createQueryString('subHeading', e.target.value)}`)
  }

  return (
    <>
      <Heading heading='Code' className="text-center" />
      <pre>
        {`<Heading\n\tlevel={`}
        <Input type="number" value={searchParams.get('level') ?? 1} className="w-10 p-0 mb-0 mr-[-31px]" min={1} max={6} onChange={handleLevelChange} />
        {`}\n\theading='`}
        <Input type="text" value={searchParams.get('heading') ?? ''} size='variable' className="p-0 mb-0 mr-[-5px]" onChange={handleHeadingChange} />
        {`'\n\tsubHeading='`}
        <Input type="text" value={searchParams.get('subHeading') ?? ''} size='variable' className="p-0 mb-0 mr-[-5px]" onChange={handleSubHeadingChange} />
        {`'\n/>`}
      </pre>
    </>
  )
}

export default HeadingCode
