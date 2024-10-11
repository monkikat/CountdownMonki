import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import Divider from './Divider';

const Navbar = () => {
  return (
    <>
      <nav className='flex w-full items-center justify-between py-6'>
        <a href='/'
           className='flex-none'>
          <img src={Logo} 
            alt='Logo' 
            className='h-10' />
        </a>

        <div className='flex items-center'>
          <ul className='flex flex-grow space-x-2 md:space-x-20'>
            <li>
              <Link to='/'>Countdown</Link>
            </li>
            <li>
              <Link to='/demo'>Demo</Link>
            </li>
          </ul>
        </div>

        <button className='flex items-center'>
          Contact
        </button>
      </nav>

      <Divider/>
    </>
  )
}

export default Navbar
