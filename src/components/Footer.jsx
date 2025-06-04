import React from 'react'

const Footer = () => {
  return (
    <div className='w-[100%] bg-blue-950  text-center py-3 '>
      <h2 className='text-6xl my-9 text-white'>ReactRouter</h2>
      <form action="" className='lg-flex  justify-center items-center pl-9 block'>
        <label htmlFor=" "className='text-white'>Name</label>
      <input type="text" className='bg-white rounded m-3 px-2' placeholder='Enter Name'/>
        <label htmlFor="" className='text-white'>Title</label>
      <input type="text" className='bg-white rounded m-3 px-2' placeholder='Enter Title'/>
        <label htmlFor="" className='text-white'>Subject</label>
      <input type="text" className='bg-white rounded m-3 px-2' placeholder='Enter Subject'/>
      <button className='bg-green-200 px-6 cursor-pointer'>
        Contact
      </button>

      </form>
      <ul className='flex flex-wrap text-white mt-9'>
        <li className='w-1/4 cursor-pointer hover:text-green-200'>Home</li>
        <li className='w-1/4 cursor-pointer hover:text-green-200'>About</li>
        <li className='w-1/4 cursor-pointer hover:text-green-200'>Features</li>
        <li className='w-1/4 cursor-pointer hover:text-green-200'>Contact</li>
        <li className='w-1/4 cursor-pointer hover:text-green-200'>lorem lorem</li>
        <li className='w-1/4 cursor-pointer hover:text-green-200'>lorem lorem</li>
        <li className='w-1/4 cursor-pointer hover:text-green-200'>lorem lorem</li>
        <li className='w-1/4 cursor-pointer hover:text-green-200'>lorem lorem</li>
        <li className='w-1/4 cursor-pointer hover:text-green-200'>lorem lorem</li>
        <li className='w-1/4 cursor-pointer hover:text-green-200'>lorem ispsum  lorem</li>
        <li className='w-1/4 cursor-pointer hover:text-green-200'>lorem ispsum  lorem</li>
        <li className='w-1/4 cursor-pointer hover:text-green-200'>lorem ispsum  lorem</li>
        <li className='w-1/4 cursor-pointer hover:text-green-200'>lorem lorem</li>
        <li className='w-1/4 cursor-pointer hover:text-green-200'>lorem lorem</li>
        <li className='w-1/4 cursor-pointer hover:text-green-200'>lorem lorem</li>
      </ul>
      <p className='mt-9 bg-green-200 py-3'>&copy copyright || all rights are reserved || developed by ||MKCodeHub139 </p>
    </div>
  )
}

export default Footer