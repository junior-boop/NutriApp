import { createContext, useContext } from 'react'

const GlobalContext = createContext(null)

export default function GlobalContextProvider({children}){
    return (
        <GlobalContext.Provider value = {{

        }}>
            {children}
        </GlobalContext.Provider>
    )
}



export const useGlobalContext = () => {
    return useContext(GlobalContext)
}