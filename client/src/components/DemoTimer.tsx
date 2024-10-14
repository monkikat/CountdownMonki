import { countdownType } from "../pages/DemoPage";

interface DemoTimerProps {
  countdown: countdownType;
}


const DemoTimer = ({countdown} : DemoTimerProps) => {
  
    return (
      <div className="flex w-fit rounded-2xl border border-white bg-white shadow-lg p-10 mb-10">
        <p className="text-7xl">{countdown.days} :</p>
        <p className="text-7xl">{countdown.hours} :</p>
        <p className="text-7xl">{countdown.minutes} :</p>
        <p className="text-7xl">{countdown.seconds}</p>
      </div>
    )
  }

  export default DemoTimer;