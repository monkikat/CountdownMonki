import ContactSection from "../components/ContactSection"
import DemoSection from "../components/DemoSection"
import MainText from "../components/MainText"
import RegisterSection from "../components/RegisterSection"
import Timer from "../components/Timer"

const CountdownPage = () => {
  return (
    <div className="flex flex-col justify-between items-center flex-grow p-10">
      <MainText/>
      <Timer/>
      <div className="flex space-x-20">
        <RegisterSection/>
        <DemoSection/>
        <ContactSection/>
      </div>
    </div>
  )
}

export default CountdownPage
