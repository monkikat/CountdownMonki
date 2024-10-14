import DemoTimer from "../components/DemoTimer"
import EditIcon from "../assets/edit.svg"
import ForwardIcon from "../assets/fastForward.svg"
import InstructionsSection from "../components/InstructionsSection"
import DemoMainText from "../components/DemoMainText"
import { useEffect, useState } from "react"
import { calculateTimeLeft } from "../utils/countdownUtils"
import DemoEventLaunch from "../components/DemoEventLaunch"

export interface countdownType {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const DemoPage = () => {
  const currentDate = new Date();
  const eventDate = new Date(currentDate);
  eventDate.setSeconds(currentDate.getSeconds() + 15);

  const [countdown, setCountdown] = useState<countdownType>(calculateTimeLeft(eventDate));
  const [ eventLaunch, setEventLaunch ] = useState<boolean>(false);

  useEffect(() => {
    const intervalID = setInterval(() => {
      const currentCountdown = calculateTimeLeft(eventDate);
      setCountdown(currentCountdown);

      if(currentCountdown.days == '00' &&
        currentCountdown.hours == '00' &&
        currentCountdown.minutes == '00' && 
        currentCountdown.seconds == '00'
      ) {
        setEventLaunch(true);
        clearInterval(intervalID);
      } else {
        setEventLaunch(false);
      }

    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="flex flex-col w-full justify-between items-center flex-grow pt-20">
      {
        eventLaunch ? (
          <DemoEventLaunch/>
        ) : (
          <>
            <DemoMainText/>
            <DemoTimer countdown={countdown}/>

            <div className="flex space-x-10">
              <img src={EditIcon} 
                alt='Edit Icon'
                className="h-6" />
              <img src={ForwardIcon} 
                alt='Fast Forward Icon'
                className="h-6" />
            </div>
          </>
        )
      }
      <div className="flex mt-10 mb-20">
        <InstructionsSection/>
      </div>

    </div>
  )
}

export default DemoPage
