const MainText = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-5xl">Countdown to React Summit 2024</p>
      <p>Nov 19 - 22</p>
      
      <div className="flex flex-col gap-1 items-center">
        <p className="text-lg">Join the global React community in New York. Stay ahead with the latest in React and web development.</p>
        <p className="text-base">For more information, visit {''}
            <a
            href='https://reactsummit.us/'
            target='_blank'>
            React Summit
            </a>.
        </p>
      </div>
    </div>
  )
}

export default MainText
