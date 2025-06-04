import React from 'react'
import { Link ,NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <div className=''>

     <nav className=' flex lg:w-[90vw] md:w-[90vw] w-[100vw] bg-green-200 py-2 rounded-full mt-3 justify-between px-5 '>
        <div className="logo text-xl"> 
          <Link to="/"> React<span className='text-blue-950'>Router</span></Link>
          </div>
        <ul className='flex lg:gap-9 md:gap-9 gap-4 md:text-[16px] lg:text-[16px] text-[13px]'>
        <li className=''> <NavLink to="/" className={({isActive})=>isActive?'text-blue-950 ':' hover:text-blue-950'}>Home</NavLink> </li>
        <li className=''> <NavLink to="/about" className={({isActive})=>isActive?'text-blue-950 ':'text-black hover:text-blue-950'}>About</NavLink> </li>
        <li className=''><NavLink to="/contact" className={({isActive})=>isActive?'text-blue-950 ':'text-black hover:text-blue-950'}>Contact</NavLink> </li>
        <li className=''><NavLink to="/github/anything you can write" className={({isActive})=>isActive?'text-blue-950 ':'text-black hover:text-blue-950'}>Github</NavLink> </li>
        <li className='cursor-pointer'></li></ul>
      </nav>
    </div>
  )
}

export default Nav