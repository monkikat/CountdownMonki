import MainText from "../components/MainText"
import Timer from "../components/Timer"
import EditIcon from "../assets/edit.svg"
import ForwardIcon from "../assets/fastForward.svg"
import InstructionsSection from "../components/Instructions"

const DemoPage = () => {
  return (
    <div className="flex flex-col h-full justify-between items-center p-10">
      <MainText/>
      <div className="flex">
        <Timer/>
        <div className="flex flex-col">
          <img src={EditIcon} 
            alt='Edit Icon'
            className="h-4" />
          <img src={ForwardIcon} 
            alt='Fast Forward Icon'
            className="h-4" />
        </div>
      </div>
      <InstructionsSection/>

    </div>
  )
}

export default DemoPage
