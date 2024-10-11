const ContactCard = () => {
  return (
    <div className="rounded-3xl border-2 h-fit w-fit px-32 py-10 overflow-y-auto">
      <form className="flex flex-col space-y-4 items-center justify-between">
        <p className="text-lg">Contact Me</p>
        <p className="w-2/3">Hi, I'm Monkikat! Send me a message and I'll get back to you ASAP.</p>
        <input
              type="email"
              placeholder="Your email"
              className="flex border-2 rounded-2xl w-full p-2"></input>
        <input
              type="name"
              placeholder="Your name"
              className="flex border-2 rounded-2xl w-full p-2"></input>
        <div className="flex flex-col w-full space-y-2">
          <label htmlFor="message">How can I help?</label>
          <textarea className="border-2 rounded-2xl max-h-52 w-full p-2"></textarea>
        </div>
        <button className="flex">Send Message</button>
      </form>
      
    </div>
  )
}

export default ContactCard
