import React, {useState} from 'react';
import {Link  } from "react-router-dom"
import {styles } from '../style'
import { navLinks} from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(true)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary` }>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
          <Link to="/" className="flex items-center gap-2" 
           onClick={()=> {
            setActive("");window.scrollTo(0, 0)}}>
              <img src={logo} alt="logo" className=" w-9 h-9 object-contain"/>
              <p className="text-white text-[18px] font-bold cursor-pointer">Ankit Mukhia</p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
              {navLinks.map((item) => (
                <li key={item.id} onClick={()=> setActive(item.title)} >
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
                <img  src={toggle ? menu : close} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
                 onClick={()=> setToggle(!toggle)}/>
                 <div className={`${toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-2 min-w-[140px] rounded-xl z-10`}>
                   <ul className="list-none flex items-start justify-start flex-col gap-5">
                      {navLinks.map((item) => (
                      <li key={item.id} onClick={()=> {
                        setToggle(!toggle)
                        setActive(item.title)}} >
                      <a href={`#${item.id}`}>{item.title}</a>
                      </li>
                      ))}
                    </ul>
                 </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar