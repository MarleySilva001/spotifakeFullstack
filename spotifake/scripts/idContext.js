import { createContext, useState } from "react";

export const IdContext = createContext()
export const IdProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({
        nome:'',
        email:'',
        foto: '../assets/images/user.png'
    })

    const desconectarUser = () => {
        setUserInfo({
            nome:'',
            email:'',
            foto: '../assets/images/user.png'
        })
    }

    return(
        <IdContext.Provider value={{userInfo, setUserInfo, desconectarUser}} >
            {children}
        </IdContext.Provider>
        )
}

