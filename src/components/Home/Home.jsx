import React from 'react'

const Home = () => {
  return (
   <div className="layout lg:flex md:flex w-[90%] mb-5">
        <div className="text  lg:w-[40vw] md:w-[40vw]  mt-22">

      <h1 className=' text-4xl text-white'>Welcome To ReactRouter Website </h1>
      <p className='mt-12 text-white'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quas optio quo soluta quasi non ipsam deserunt dolorem perspiciatis ipsa mollitia vero est earum dolores. Quod suscipit perferendis et blanditiis!
      </p>
      <button className='bg-green-200 px-9 py-1 mt-12 cursor-pointer hover:bg-green-100'>Button</button>
        </div>
        <div className="img lg:w-[50vw] md:w-[50vw] w-[70vw]">
          <img src="29923.jpg" alt="" className='lg:w-[45vw] md:w-[45vw] w-[70vw] float-right mt-22'/>
        </div>
      </div>
  )
}

export default Home