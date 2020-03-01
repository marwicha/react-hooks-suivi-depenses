import React, {createContext, useReducer} from 'react'

import AppReducer from './AppReducer'

// Initial state

const InitialState = {

    depenses: [
   { id: 1, text: 'livres', somme: -20 },
   { id: 2, text: 'loyer', somme: 300 },
   { id: 3, text: 'tel', somme: -10 },
   { id: 4, text: 'sac', somme: 150 }

]
}

// Create context

export const GlobalContext = createContext(InitialState)


// Provider component

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, InitialState);

    return (
        <GlobalContext.Provider value={{
            depenses: state.depenses
        }}> 
        {children}
        </GlobalContext.Provider>
    
    )
}





