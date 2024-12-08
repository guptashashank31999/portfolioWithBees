import React, { useEffect, useRef, useState } from 'react'
import Grid from '@mui/material/Grid';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import MouseANimation from './MouseAnimation/MouseANimation';


const positionProperty = {
  position:"relative"
}

const ParentComponents = () => {
  const circulerRef= useRef(null)
  const divRef = useRef(null);

  const [fromRightSideComp, setFromRightSideComp] = useState("");

  const getDataFromRightSideComp = (data) => {
    setFromRightSideComp(data)
  }


  const cursorFun = (e) => {

    let circle = circulerRef.current;
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
    // circle.style.left = `${200}px`
    // circle.style.top = `${400}px`
    //  circle.style.height = `${e.clientY}px`
    // circle.style.width = `${e.clientX}px`
    // circle.style.maxHeight = `300px`
    // circle.style.maxWidth = `200px`

  }

  useEffect(()=>{
    console.log("test")
    // window.addEventListener('mousemove', cursorFun);

    // return () => {
    //   window.removeEventListener('mousemove', cursorFun)
    // }
  },[])
  return (
    <>
     
       <Grid container spacing={2} sx={positionProperty}  ref={divRef}>
       <MouseANimation 
      ref={circulerRef}
    />   
        <Grid item xs={12} sm={6}>
            <LeftSide fromRightSideComp={fromRightSideComp}/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <RightSide getDataFromRightSideComp={getDataFromRightSideComp} />
        </Grid>
      </Grid>
    </>
  )
}

export default ParentComponents
