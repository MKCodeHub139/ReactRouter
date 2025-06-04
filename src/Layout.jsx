import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
       <div className='main relative '>
     <video autoPlay muted loop id="myVideo"className='h-[100%] w-[100%] object-cover '>
  <source src="video.mp4" type="video/mp4"/>
  Your browser does not support HTML5 video.
</video>
<div className="main2 absolute left-0 top-0 z-[2] flex flex-col items-center w-[100%] h-[100%] ">
    <Nav/>

  
    <Outlet/> 
     
    
    <Footer/>
</div>


    </div>
    </>
  )
}

export default Layout;