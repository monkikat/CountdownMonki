import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
// import Divider from './Divider';
import { useState } from 'react';
import ContactCard from './ContactCard';

const Navbar = () => {
  const [showContactCard, setShowContactCard] = useState<boolean>(false);

  const toggleContactCard = () => {
    setShowContactCard(true);
  }

  const closeContactCard = () => {
    setShowContactCard(false);
  }

  return (
    <>
      <nav className='fixed flex w-full items-center justify-center space-x-32 py-4 bg-primary-50'>
        <a href='/'
          className='flex-none font-bold
            transition hover:scale-105'>
          <img src={Logo} 
            alt='Logo' 
            className='flex h-8' />
        </a>

        <div className='flex items-center'>
          <ul className='flex flex-grow font-semibold space-x-2 md:space-x-10 text-primary-700 text-sm'>
            <li className='transition hover:scale-105'>
              <Link to='/'>Countdown</Link>
            </li>
            <li className='transition hover:scale-105'>
              <Link to='/demo'>Demo</Link>
            </li>
          </ul>
        </div>

        <button className='flex items-center text-sm text-primary-700 bg-white px-4 py-1 rounded-full shadow-md
          transition hover:bg-primary-800 hover:text-white'
          onClick={toggleContactCard}>
          Contact
        </button>

        {/* <Divider/> */}
      </nav>

      {
        showContactCard && (
          <div className='fixed flex h-full items-center justify-center inset-0 bg-primary-900 bg-opacity-80'  //add faded bg
            onClick={closeContactCard}>
            <div onClick={(e) => e.stopPropagation()}>
              <ContactCard/>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Navbar
