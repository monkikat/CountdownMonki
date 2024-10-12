import Timer from "../components/Timer"
import EditIcon from "../assets/edit.svg"
import ForwardIcon from "../assets/fastForward.svg"
import InstructionsSection from "../components/InstructionsSection"
import DemoMainText from "../components/DemoMainText"

const DemoPage = () => {
  return (
    <div className="flex flex-col w-full justify-between items-center flex-grow">
      <DemoMainText/>
      <Timer/>

      <div className="flex space-x-10">
        <img src={EditIcon} 
          alt='Edit Icon'
          className="h-6" />
        <img src={ForwardIcon} 
          alt='Fast Forward Icon'
          className="h-6" />
      </div>

      <div className="flex mt-10 mb-20">
        <InstructionsSection/>
      </div>

    </div>
  )
}

export default DemoPage
