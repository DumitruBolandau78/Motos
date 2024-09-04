import { useState } from "react";
import HeaderLinkList from "./HeaderLinkList";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 bg-gray-900 z-50'>
      <div className="flex justify-between items-center py-4 max-w-screen-xl mx-auto">
        <div className="logo">
          <img src={'./images/logo.png'} alt="logo" />
        </div>
        <nav className="hidden lg:flex">
          <HeaderLinkList direction={'flex-row'} gap={'gap-7'} />
        </nav>
        <div className="icon burger cursor-pointer lg:hidden flex fixed top-2 right-2">
          <nav className={`${isNavOpen ? 'right-0' : 'right-[-100%]'} fixed text-2xl top-0 pt-[70px] duration-300 bg-green-500 max-w-[500px] w-full min-h-[100vh] flex items-center justify-center flex-col`}>
            <HeaderLinkList setIsNavOpen={setIsNavOpen} direction={'flex-col'} gap={'gap-3'} />
          </nav>
          <svg onClick={() => setIsNavOpen(!isNavOpen)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white size-10 z-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
    </header>
  )
}

export default Header