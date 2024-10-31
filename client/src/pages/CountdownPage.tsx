/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import ContactSection from "../components/ContactSection"
import DemoSection from "../components/DemoSection"
import MainText from "../components/MainText"
import RegisterSection from "../components/RegisterSection"
import Timer from "../components/Timer"
import { calculateTimeLeft } from "../utils/countdownUtils"
import EventLaunch from "../components/EventLaunch"

export interface countdownType {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const CountdownPage = () => {
  const eventDate = new Date('2024-11-19T00:00:00');

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
          <EventLaunch/>
        ) : (
          <>
            <MainText/>
            <Timer countdown={countdown}/>
            <p className="text-base text-center text-primary-700 font-semibold">For more information, visit {''}
                  <a
                  href='https://reactsummit.us/'
                  target='_blank'>
                  React Summit
                  </a>.</p>
          </>
        )
      }
      <div className="flex justify-start px-12 gap-10 mt-20 mb-20">
        <RegisterSection/>
        <DemoSection/>
        <ContactSection/>
      </div>
    </div>
  )
}

export default CountdownPage
