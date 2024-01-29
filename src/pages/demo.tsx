import Button from "@/components/Button"
import Heading from "@/components/Heading"

const Demo = () => {
  return <>
    <Heading level={1} heading={'Demo Page'} subHeading={'With Sub Heading'} />
    <section className="my-8">
      <Button type='button' color='primary'>Click Me!</Button>
    </section>
  </>
}

export default Demo
