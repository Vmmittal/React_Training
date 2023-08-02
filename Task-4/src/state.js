
import { useState } from 'react';


function Hooks(){
    const [count,setcount] = useState(0)
    
    useEffect(()=> {
        setTimeout(()=>{})
    })
    return(
        <div>
         <h1>{count}</h1>
         <button onClick={()=> {setcount(count + 1)}}>Plus</button>
        </div>
    )
}
export default Hooks;