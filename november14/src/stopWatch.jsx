import { useRef, useState } from "react"

export default function StopWatch(){
    const [elapsedTime, setElapsedTime]=useState(0)

    const intervalIdRef = useRef(null)
    const isRunningRef = useRef(false)

    function start(){
      if (isRunningRef.current) return

      intervalIdRef.current=setInterval(()=>{setElapsedTime(et=>et+1)},1000)

      isRunningRef.current=true

      console.log(intervalIdRef.current)

    }

    function stop(){
        console.log(intervalIdRef.current)
        clearInterval(intervalIdRef.current)

        isRunningRef.current = false
    }

    
    function reset(){
        console.log(intervalIdRef.current)
        clearInterval(intervalIdRef.current)

        isRunningRef.current = false

        setElapsedTime(0)
    }



    return(
        <div>
            <span>Timer:{elapsedTime}</span>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}