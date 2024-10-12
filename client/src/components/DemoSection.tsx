import { useNavigate } from 'react-router-dom';
import ClockIcon from '../assets/clock.svg';

const DemoSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col flex-1 h-fit justify-between items-center space-y-6 border border-white bg-white rounded-xl shadow-lg p-10
      transition hover:scale-105 hover:cursor-pointer group"
      onClick={() => navigate('/demo')}>
        <p className="flex text-lg font-semibold text-center">
          Explore the demo timer to watch the countdown in action.</p>
        <img src={ClockIcon} 
          alt='Timer Icon'
          className='h-10
            group-hover:animate-wiggle'/>
        <p className="flex text-center">
          Set your own time, or watch the timer countdown from 15 and launch a demo event.</p>
    </div>
  )
}

export default DemoSection
