"use client"

import Button from "components/Button"
import Heading from "components/Heading"

const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  console.log(e.target)
}

const Demo = () => {
  return <>
    <section className="my-8">
      <Heading
        level={1}
        heading="Components"
      />
      <Button size="xl" type='button' color='primary' onClick={handleClick}>Heading</Button>
    </section>
  </>
}

export default Demo
