const RegisterSection = () => {

  //on form submit store emails in db through backed call
  //when timer hits zero trigger call abckend end point to send emails via nodemailer?

  return (
    <div className="flex flex-col flex-1 h-fit border items-center justify-between space-y-6 border-white bg-white rounded-xl shadow-lg p-10
      transition hover:scale-105">
      <form className="flex justify-between space-x-6 w-full">
        <input type="email"
        placeholder="Your email"
        className=" w-full border-2 px-4 py-2 rounded-2xl"></input>

        <button type="submit"
          className='flex items-center text-sm text-white bg-primary-800 px-4 rounded-2xl
            transition hover:scale-105'>
          Register
        </button>
      </form>
      
      <p className="flex text-pretty">Sign up with your email today to receive an update when the timer hits zero!</p>
      
    </div>
  )
}

export default RegisterSection
