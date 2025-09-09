import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/portfolio-icon.svg'
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const isMobile = useMediaQuery('(max-width: 640px)');
  
  const location = useLocation();

  return (
    <header>
      <nav>
        <div className="pl-4 w-fit">
          <Link to='/'>
            <img src={logo} alt="logo" className="w-[40px]" />
          </Link>
        </div>
        <div className="flex justify-between px-6">
        <button onClick={toggleMenu} className="transition fixed top-4 right-4 z-50 ">
          {isOpen ? <X className="w-8 h-8"/> : <Menu className="w-8 h-8"/>}
        </button>
        </div>
        <div className={`flex flex-col items-end gap-2 fixed top-18 right-2 transform ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'} transition ${isMobile ? 'bg-white rounded shadow-lg w-[100px]' : ''}`}>
          <a href={`${location.pathname === '/contact' ? '/' : '#'}`} className={`uppercase hover:underline transition py-2 ${isMobile ? 'border-b p-3 w-full' : ''}`}>Home</a>
          <a href={`${location.pathname === '/contact' ? '/#skills' : '#skills'}`} className={`uppercase hover:underline transition py-2 ${isMobile ? 'border-b p-3 w-full' : ''} ${location.pathname === '/contact' ? 'hidden' : ''}`}>Skills</a>
          <a href={`${location.pathname === '/contact' ? '/#projects' : '#projects'}`} className={`uppercase hover:underline transition py-2 ${isMobile ? 'border-b p-3 w-full' : ''} ${location.pathname === '/contact' ? 'hidden' : ''}`}>Projects</a>
          <Link to='/contact' className={`uppercase hover:underline transition py-2 ${isMobile ? 'border-b p-3 w-full' : ''}`}>Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header