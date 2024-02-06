import Heading from 'components/Heading'
import Input from 'components/Input'

type ControllerProps = {
  heading: string
  subHeading: string
  onHeadingChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSubHeadingChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Controller = ({ heading, subHeading, onHeadingChange, onSubHeadingChange }: ControllerProps) => (
  <div className="grid auto-rows-min">
    <button onClick={e=>console.log(e.target)}>CLICK!</button>
    <Heading level={2} heading='Enter Custom Text' />
    <Input id='demoHeading' label='Heading Text' value={heading} onChange={onHeadingChange} />
    <Input id='demoSubHeading' label='Sub Heading Text' value={subHeading} onChange={onSubHeadingChange} />
  </div>
)

export default Controller
