import { useState } from "react";
import emailjs from '@emailjs/browser';
import Logo from '../assets/logo.svg';


//add bg color
//pass closecontactcard prop to close card after sending email


const ContactCard = () => {

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      to_name: 'Monkikat',
      from_email: email,
      message: message,
    };
    
    try {
      const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log('SUCCESS!', response.status, response.text);
      setEmail('');
      setName('');
      setMessage('');
    }
    catch (err) {
      console.log('Error sending email:', err);
    }

  };

  return (
    <div className="rounded-3xl overflow-y-auto bg-primary-50 py-10 px-20">
    <div className="flex flex-col items-center space-y-2 mb-8">
        <a href='/'
        className='flex-none font-bold'>
        <img src={Logo} 
          alt='Logo' 
          className='flex h-10' />
        </a>
        <p className="text-xl text-primary-800 font-semibold">Contact Me</p>
        {/* <p className="text-md text-primary-700 font-bold text-center">Hi, I'm Monkikat! I designed this website using React.js + Tailwind CSS. Send me a message and I'll get back to you ASAP.</p> */}
      </div>

      <form className="flex flex-col items-center space-y-2"
        onSubmit={handleSubmit}>
        <input
              type="email"
              placeholder="Your email"
              value={email}
              className="w-full border-2 rounded-xl px-4 py-2"
              onChange={(e) => setEmail(e.target.value)}
              required></input>

        <input
              type="text"
              placeholder="Your name"
              value={name}
              className="w-full border-2 rounded-xl px-4 py-2"
              onChange={(e) => setName(e.target.value)}
              required></input>

        <div className="space-y-4 pt-4 pb-10">
          <label htmlFor="message"
          className="text-lg">How can I help?</label>
          <textarea className="border-2 rounded-xl max-h-52 w-full px-4 py-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required></textarea>
        </div>

        <button type="submit" className="text-lg flex w-fit justify-center px-8 py-2 bg-primary-300 rounded-xl
          transition hover:scale-105">Send Message</button>
      </form>
      
    </div>
  )
}

export default ContactCard
