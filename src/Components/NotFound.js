import React from 'react'
import "./Contact.css"

const NotFound = () => {
  return (
    <>
        <div className='warning bg-black'>
        <div className='h1 text-center fw-bold mh-100' style={{textTransform:"Uppercase"}}>
            <p className='text-danger'><span className='mt-4 text-red'> ⚠ </span> WARNING !! </p>
            <p>Your 9 Hours Shift Is Over</p>
            <p>Your System Will shutdown in 5 minutes</p>
            <p>Please Go Home Now 🏠 </p>
            {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
        </div> 
        </div>
    </>
  )
}

export default NotFound
