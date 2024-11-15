import { useState, useRef } from "react";

export default function RefVsState()
{

    //NOTE: This is an IMPOROPER USE OF REF, example is ment to show difference between ref and state
  const refCounter = useRef(0)
  const [stateCounter, setStateCounter]=useState(0)

  function incrementRefCounter()
  {
    refCounter.current+=1
    console.log(refCounter.current)
  }

  function incrementStateCounter(){
    setStateCounter(stateCounter+1)
    console.log(stateCounter)
  }

  return(
    <div>
      <button onClick={incrementRefCounter}>
        The value of the refCounter is {refCounter.current}
      </button>
      <button onClick={incrementStateCounter}>
        the value of stateCounter is {stateCounter}
      </button>
    </div>
  )
}