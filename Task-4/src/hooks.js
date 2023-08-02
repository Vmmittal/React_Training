
import React, {  useState } from 'react'

function HooksProj(){
   const [color, setColor] = useState('green')
   const [bcolor, bsetColor] = useState(false)

    if(bcolor){
        document.body.style.backgroundColor ='lightblue'
    }

    else{
        document.body.style.backgroundColor ='grey'
    }

    const change = ()=>{
        setColor(color === 'green' ? 'blue' : 'green')
    }
    
    const changeBackground= ()=>{
        bsetColor(bcolor ? false : true)
    }
    
    return(
        <div style={{backgroundColor:bcolor}}>
            <h1>Change Backgrounds</h1>

            <button onClick={change} style={{ backgroundColor: color , color:'white'}} className='button1'>Click to change button Background</button>

            <button onClick={changeBackground} className='button1'>Click to change page Background</button>
        </div>
    )
}

export default HooksProj;