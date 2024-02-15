import { Suspense } from "react"
import Loading from "../loading"

type PlaygroundLayoutProps = {
  navigation: React.ReactNode
  display: React.ReactNode
  propsController: React.ReactNode
  code: React.ReactNode
  children?: React.ReactNode
}

const PlaygroundLayout = ({
  display,
  propsController,
  code
}: PlaygroundLayoutProps) => {
  return <>
    <section className="border-4 border-blue-400 h-96 overflow-y-auto px-6">
      {display}
    </section>
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <section className="border-4 border-green-400 overflow-y-auto px-6">
        {propsController}
      </section>
      <section className="border-4 border-yellow-400 overflow-y-auto px-6">
        {code}
      </section>
    </div>
  </>
}

export default PlaygroundLayout
