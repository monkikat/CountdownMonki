const DemoEventLaunch = () => {
    return (
        <div className="flex flex-col items-center justify-between gap-2 mt-20 mb-10">
          <p className="text-6xl text-center font-bold text-primary-800">Demo Event is here!</p>
          <p className="text-base text-center text-primary-700 font-semibold">For information on event details, visit {''}
                  <a
                  href='/'
                  target='_blank'>
                  Demo Event Link
                  </a>.</p>
        </div>
      )
}

export default DemoEventLaunch
