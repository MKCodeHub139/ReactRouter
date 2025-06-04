import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Github = () => {
    useEffect(()=>{
        // fetch('https://api.github.com/users')
    },[])
    const {userId} =useParams()
  return (
    <div className='my-3 w-full h-[100vh] bg-green-100 px-22 py-16'>
        <div className="github">
        <h2 className='text-4xl '>
            GitHub:User -  {userId}
        </h2>
         <a href=""></a>
        </div>
    </div>
  )
}

export default Github