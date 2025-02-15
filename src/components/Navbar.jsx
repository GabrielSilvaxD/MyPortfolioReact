import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs"
import { useState } from "react"
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  const menuOpen = () => {
    setIsOpen(!isOpen);
  }


  return (
   <nav className="fixed top-0 z-10 flex w-full items-center justify-between border -b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
       <a href="#home" className="bg-gradient-to-r from-blue-500 to bg-pink-500 bg-clip-text text-transparent opacity-80 text-3x1 font-semibold transition-all duration-300 hover:opacity-100">Gabriel</a>


      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Home</li>
        </a>

         <a href="#Tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
           <li>Tech</li>
          </a>

         <a href="#Project" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
           <li>Project</li>
        </a>

         <a href="#Contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Contact</li>
          </a>
      
       </ul>

       <ul className="hidden md:flex gap-5">
        <li className="curson-pointer text-x1 opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
          <BsYoutube/>
        </li>

        <li className="curson-pointer text-x1 opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <BsLinkedin/>
        </li>

        <li className="curson-pointer text-x1 opacity-70 transition-all duration-300    hover:text-blue-500 hover:opacity-100">
          <BsTwitterX/>
        </li>

        <li className="curson-pointer text-x1 opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
          <BsGithub/>
        </li>
       </ul>

       {isOpen ? (
          <BiX className="block md:hidden text-4x1" onClick={menuOpen}/>
        ) : (
          <BiMenu className="block md:hidden text-4x1"onClick={menuOpen}/>
      )}


      {isOpen && (
        <div className={`fixed right-0 top-[84px] flex-h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 dg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}>

          <ul className="flex flex-col gap-8 ">
        <a href="#Home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Home</li>
        </a>

         <a href="#Tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
           <li>Tech</li>
          </a>

         <a href="#Project" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
           <li>Project</li>
        </a>

         <a href="#Contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            <li>Contact</li>
          </a>

          </ul>

          <ul className="flex flex-wrap gap-5">
        <li className="curson-pointer text-x1 opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
          <BsYoutube/>
        </li>

        <li className="curson-pointer text-x1 opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <BsLinkedin/>
        </li>

        <li className="curson-pointer text-x1 opacity-70 transition-all duration-300    hover:text-blue-500 hover:opacity-100">
          <BsTwitterX/>
        </li>

        <li className="curson-pointer text-x1 opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
          <BsGithub/>
        </li>
       </ul>

        </div>

      )}
       
       
    </nav>
  )
}

export default Navbar
