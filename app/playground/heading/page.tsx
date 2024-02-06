"use client"

import { useState } from 'react'
import Usage from 'components/Demo/Usage/Heading'
// import './headingDemo.css'
import Controller from './Controller'
import Heading from '@/components/Heading'

const HeadingDemo = () => {
  const [heading, setHeading] = useState('Heading')
  const [subHeading, setSubHeading] = useState('Sub Heading')

  const handleHeadingChange: React.ChangeEventHandler<HTMLInputElement> = e => setHeading(e.target.value)
  const handleSubHeadingChange: React.ChangeEventHandler<HTMLInputElement> = e => setSubHeading(e.target.value)

  return <div className="prose max-w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8">
    <div>
      <Heading level={1} heading={heading} subHeading={subHeading} />
      <hr className="border-4 border-accent-blue-light" />
      <Controller heading={heading} subHeading={subHeading} onHeadingChange={handleHeadingChange} onSubHeadingChange={handleSubHeadingChange} />
    </div>
    <Usage componentName={'Heading'} />
  </div>
}

export default HeadingDemo
