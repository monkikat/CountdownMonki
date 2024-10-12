import ContactSection from "../components/ContactSection"
import DemoSection from "../components/DemoSection"
import MainText from "../components/MainText"
import RegisterSection from "../components/RegisterSection"
import Timer from "../components/Timer"

const CountdownPage = () => {
  return (
    <div className="flex flex-col w-full justify-between items-center flex-grow">
      <MainText/>
      <Timer/>
      <p className="text-base text-center text-primary-700 font-semibold">For more information, visit {''}
            <a
            href='https://reactsummit.us/'
            target='_blank'>
            React Summit
            </a>.</p>
      <div className="flex justify-start px-12 space-x-10 mt-20 mb-20">
        <RegisterSection/>
        <DemoSection/>
        <ContactSection/>
      </div>
    </div>
  )
}

export default CountdownPage
