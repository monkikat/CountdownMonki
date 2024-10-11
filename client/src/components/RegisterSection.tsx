const RegisterSection = () => {
  return (
    <div className="flex-1 border-2">
      <p>The React Summit 2024 is right around the corner!</p>
      <p> Sign up with your email to receive weekly updates and be the first to know when the countdown hits zero!</p>
      
      <div className="flex flex-col">
        <label>
            Enter your email to register:
        </label>

        <div className="flex">
          <input 
            type="email"
            id='email'
            placeholder="you@email.com"
            className="border-2">
          </input>
          <button>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterSection
