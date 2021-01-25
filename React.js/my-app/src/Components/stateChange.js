import React,{useState} from "react";

function StateChange(){
    const [count,setCount ]=useState(0);
    const [isRed,setRed]=useState(false);
    const increment=()=>{
        setCount(count+1);
        setRed(!isRed);
    }

    return (
        <div>
            <h2 className={isRed?"red":''}>Change my Color to red</h2>
            <button onClick={increment}>Increment</button>
            <p>{count}</p>
        </div>
    )
}

export default StateChange;