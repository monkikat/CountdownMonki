import wave from '../assets/bgWave.svg';

const Background = () => {
  return (
    <div className="absolute bottom-0 w-full h-[50vh] bg-no-repeat bg-bottom bg-contain animate-slide-up" style={{ backgroundImage: `url(${wave})` }}>
    </div>
  )
}

export default Background
