import Button from "@/components/Button"
import Heading from "@/components/Heading"

const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  console.log(e.target)
}

const Demo = () => {
  return <>
    <Heading level={1} heading={'Heading'} subHeading={'Sub Heading'} />
    <Heading level={2} heading={'Heading'} subHeading={'Sub Heading'} />
    <Heading level={3} heading={'Heading'} subHeading={'Sub Heading'} />
    <Heading level={4} heading={'Heading'} subHeading={'Sub Heading'} />
    <Heading level={5} heading={'Heading'} subHeading={'Sub Heading'} />
    <Heading level={6} heading={'Heading'} subHeading={'Sub Heading'} />
    <section className="my-8">
      <Button size="xl" type='button' color='primary' onClick={handleClick}>Click Me!</Button>
    </section>
  </>
}

export default Demo
