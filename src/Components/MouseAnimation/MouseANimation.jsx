import React from 'react'
import { forwardRef } from 'react';


const MouseANimation = forwardRef((props, ref) => {
    return (
      
      <div
      //  ref={ref}
      
      style={{
      width:"50px",
      height:"50px",
      position:"absolute",
      background:'black',
      borderRadius:"50px",
      backgroundColor:"#0F172A",
      backgroundColor:"transparent", 
      boxShadow: "rgb(255, 255, 255) 0px 0px 20px, rgb(255, 255, 255) 0px 0px 40px, rgb(255, 255, 255) 0px 0px 60px, rgb(255, 255, 255) 0px 0px 80px",
      }}

      >
        
      </div>
    )
  }) 

export default MouseANimation
