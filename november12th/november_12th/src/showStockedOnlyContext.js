import {createContext, useReducer} from 'react'

export const showStockedOnlyContext = createContext(null);

export function showStockedOnlyContextProvider(){
    const [ value, dispatch] = useReducer(showStockedOnlyReducer, false)

    return(
        <showStockedOnlyContext.Provider value = {{value, dispatch}, {children}}>
        </showStockedOnlyContext.Provider>
    )
}

function showStockedOnlyreducer (value, event){
    switch (event.type)
    {
        case 'set':
            return event.value
        default:
            return value
    }
}