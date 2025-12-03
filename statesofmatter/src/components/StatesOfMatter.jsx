import React, { useEffect, useState } from 'react'
import ice from "../assets/ice.jpg"
import water from "../assets/water.jpg"
import watervapour from "../assets/watervapour.jpg"
import "./StatesOfMatter.css"

const StatesOfMatter = () => {
  const [temperature,setTemperature] =useState(24);
  const [state,setState] =useState({state:"liquid",image:water,state:"solid", image:ice,state:"gas",image:watervapour});

  const IncrementTemp =() =>{
    setTemperature(temperature+10);
  }

  const DecrementTemp =() => {
    setTemperature(temperature-10);
  }

  const ResetTemp =()=> {
    setTemperature(24);
  }
  const currentState=()=>{
    if(temperature>100){
      setState({state:"gas",image:watervapour});
    }else if(temperature<0){
      setState({state:"solid", image:ice});
    }
    else{
      setState({state:"liquid",image:water});
    }
  }
  useEffect(() =>{
    currentState();
  },[temperature]);

   return (
    <>
    <div className='container'>
    <div className='background'>
    <div>Temperature:{temperature}</div>
     <img src={state.image} alt={state.state} height={100} width={100}/>
     <button onClick={DecrementTemp} >cool</button>
    <button onClick={IncrementTemp}>heat</button>
    <button onClick={ResetTemp}>Reset</button> 
   
    <div>state:{state.state}</div>
    </div>
    </div>
    </>
  )
}

export default StatesOfMatter