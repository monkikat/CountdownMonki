const InstructionsSection = () => {
  return (
    <div className="flex flex-col h-fit justify-between space-y-6 border border-white bg-white rounded-xl shadow-lg p-10">
      <div className="flex flex-col flex-1 text-xl">
        <p className="flex">
          To add your custom time:</p>
        <p className="flex items-center">
          1. Click the edit icon</p>
        <p>2. Type your custom time into the timer</p>
        <p>3. Hit enter and watch it go!</p>
      </div>

      <div className="flex flex-col flex-1 text-xl">
        <p className="flex items-center">
          To skip ahead and run the launch animation, click the fast forward icon</p>
      </div>
    </div>
  )
}

export default InstructionsSection
