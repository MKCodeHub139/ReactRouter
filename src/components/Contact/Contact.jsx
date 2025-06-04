import React from 'react'

const Contact = () => {
  return (
    <div className='w-[100%] px-22 py-16'>
            <h2 className='text-white text-4xl mt-9'>Contact Us</h2>
            <form action="" className='w-[50%] block'>
                
                <label htmlFor="" className='text-white '>Name</label>
                <input type="text" className='bg-white w-[100%] my-4 rounded px-3'placeholder='Full Name'/>
                <label htmlFor="" className='text-white'>Phone No</label>
                <input type="text" className='bg-white w-[100%]  my-4 rounded px-3'placeholder='Phone Number'/>
                <label htmlFor="" className='text-white'>Address</label>
                <input type="text" className='bg-white w-[100%]  my-4 rounded px-3'placeholder='Address'/>
                <button className='bg-green-200 px-9 py-1 mt-4 cursor-pointer hover:bg-green-100'>Contact</button>
            </form>
    </div>
  )
}

export default Contact