import React from 'react'
import gif from './gif.gif'

const spinner =()=>{
  
    return (
      <div className='text-center'>
        <img src={gif} alt="loading" />
      </div>
    )
  }
export default spinner
