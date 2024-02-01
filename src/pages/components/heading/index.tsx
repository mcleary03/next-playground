import { useState } from 'react'
import Headings from '@/components/Demo/Variants/Headings'
import Usage from '@/components/Demo/Usage/Heading'
import './headingDemo.css'

const HeadingDemo = () => {
  const [heading, setHeading] = useState('Heading')
  const [subHeading, setSubHeading] = useState('Sub Heading')

  const Controller = () => {
    const handleHeadingChange: React.ChangeEventHandler<HTMLInputElement> = e => setHeading(e.target.value)
    const handleSubHeadingChange: React.ChangeEventHandler<HTMLInputElement> = e => setSubHeading(e.target.value)
    const twLabelClasses = 'prose dark:prose-invert font-bold'
    const twInputClasses = 'dark:bg-slate-950 dark:text-slate-100 p-3'

    return <div className="grid">
      <label className={twLabelClasses} htmlFor="demoHeading">Heading</label>
      <input
        id="demoHeading"
        type="text"
        value={heading}
        onChange={handleHeadingChange}
        className={twInputClasses}
      />
      <label className={twLabelClasses} htmlFor="demoSubHeading">Sub Heading</label>
      <input
        id="demoSubHeading"
        type="text"
        value={subHeading}
        onChange={handleSubHeadingChange}
        className={twInputClasses}
      />
    </div>
  }

  return <div className="prose max-w-full grid grid-cols-[50%,_auto] grid-flow-row gap-x-4">
    <Headings />
    <Controller />
    <Usage componentName={'Heading'} />
  </div>
}


export default HeadingDemo
