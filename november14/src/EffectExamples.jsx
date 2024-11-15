import { useEffect, useState } from "react";

export default function EffectExamples(){
    
    const [counter1, setCounter1]=useState(0)
    const [counter2, setCounter2]=useState(0)

    useEffect(()=>{
        console.log('this is my effect')
    },[counter1])

    return(
        <div>
            <button onClick={()=>setCounter1(c=>c+1)}> Counter 1: {counter1}</button>
            <button onClick={()=>setCounter2(c=>c+1)}> Counter 2: {counter2}</button>
        </div>
    )
}