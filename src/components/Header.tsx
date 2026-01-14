import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/portfolio-icon.svg'
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import { useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const isMobile = useMediaQuery('(max-width: 640px)');
  
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: location.pathname === '/contact' ? import.meta.env.BASE_URL : '#' },
    { label: 'Skills', path: location.pathname === '/contact' ? '/#skills' : '#skills', hideOnContact: true },
    { label: 'Projects', path: location.pathname === '/contact' ? '/#projects' : '#projects', hideOnContact: true },
    { label: 'Contact', path: '/contact', isLink: true }
  ]

  return (
    <header>
      <nav>
        <div className="fixed flex items-center w-full h-[60px] bg-white z-1000">
          <div className="pl-4 w-fit">
            <Link to='/'>
              <img src={logo} alt="logo" className="w-[40px]" />
            </Link>
          </div>
        </div>

        <div className="fixed top-0 right-0 z-1002 flex justify-between px-6">
          <button onClick={toggleMenu} className="transition fixed top-4 right-4 z-50 cursor-pointer">
            {isOpen ? <X className="w-8 h-8"/> : <Menu className="w-8 h-8"/>}
          </button>
        </div>
          
        <div onClick={toggleMenu} className={`overlay ${isOpen ? 'top-0 left-0 fixed w-screen h-screen bg-black/70 z-1000' : ''}`}>
          <div onClick={(e) => e.stopPropagation()} className={`flex flex-col items-center justify-between text-2xl w-[28vw] max-w-[300px] min-w-[130px] bg-white h-full fixed right-0 top-0 transition pt-20 ${isMobile ? 'text-base' : ''} ${isOpen ? 'opacity-100 bg-white translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
            <div className={`flex flex-col items-center gap-4`}>
              {menuItems.map((item) => {
                // skip rendering if item is hidden on contact page
                if (item.hideOnContact && location.pathname === '/contact') return null

                const commonClasses = `uppercase underline decoration-transparent hover:decoration-blue-500 decoration-3 transition-all underline-offset-8 duration-300 text-center py-2 ${isMobile ? 'p-3 w-full' : ''}`

                return item.isLink ? (
                  <Link key={item.label} to={item.path} className={commonClasses}>
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.label} onClick={toggleMenu} href={item.path} className={commonClasses}>
                    {item.label}
                  </a>
                )
              })}
            </div>

            <div className='flex gap-4 mt-12 justify-center mb-4 '>
              <a href="https://github.com/Tomoya300" target="_blank"><FaGithub title='Github' className={`${isMobile ? 'w-[30px] h-[30px]' : 'w-[45px] h-[45px]'} hover:scale-110 transition`}/></a>
              <a href="https://www.linkedin.com/in/tomoya-takeshima" target="_blank"><FaLinkedin title='Linkedin' className={`${isMobile ? 'w-[30px] h-[30px]' : 'w-[45px] h-[45px]'} hover:scale-110 transition`}/></a>
              <a href="https://www.instagram.com/tomoya_3.0" target="_blank"><FaInstagram title='Instagram' className={`${isMobile ? 'w-[30px] h-[30px]' : 'w-[45px] h-[45px]'} hover:scale-110 transition`}/></a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header