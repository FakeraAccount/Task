import React from "react"
import "./style.scss"

const Task = () => {
  return (
    <div className="flex items-center h-full w-full px-32 py-0">
      <div className="basis-3/6 my-auto mt-20 bg-orange">
        <h1 className="text-8xl font-bold leading-2 text-black mb-16">
          Create this <br/> component
        </h1>
        <p className="max-w-sm text-brown text-3xl mb-16">
          Use component &#8249;Task&#8250; to create layout
          and style.scss to write your css, additionaly you
          can use Tailwind CSS.
        </p>
        <p className="max-w-sm text-brown text-3xl mb-16">
          increas.io
        </p>
      </div>
      <div className="basis-3/6 relative mt-20 ml-4">
        <div className="gradient mb-96"></div>
      </div>
    </div>
  )
}


export default Task;