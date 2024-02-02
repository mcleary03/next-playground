import { useState } from 'react'
import Headings from '@/components/Demo/Variants/Headings'
import Usage from '@/components/Demo/Usage/Heading'
import './headingDemo.css'
import Controller from './Controller'



const HeadingDemo = () => {
  const [heading, setHeading] = useState('Heading')
  const [subHeading, setSubHeading] = useState('Sub Heading')

  const handleHeadingChange: React.ChangeEventHandler<HTMLInputElement> = e => setHeading(e.target.value)
  const handleSubHeadingChange: React.ChangeEventHandler<HTMLInputElement> = e => setSubHeading(e.target.value)


  return <div className="prose max-w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8">
    <Headings heading={heading} subHeading={subHeading} />
    <Usage componentName={'Heading'} />
    <Controller heading={heading} subHeading={subHeading} onHeadingChange={handleHeadingChange} onSubHeadingChange={handleSubHeadingChange} />
  </div>
}


export default HeadingDemo
