import { createContext, useState } from "react";

export const IdContext = createContext()
export const IdProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({
        nome:'',
        email:'',
        foto: '../assets/images/user.png'
    })

    const pegarUsuario = async (email) => {
        try {
            const response = await fetch(`http://localhost:8000/usuarios/${email}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            const dados = await response.json()
            {dados.foto? 
                setUserInfo({...userInfo, email: dados.email,nome: dados.nome, foto: dados.foto}): 
            setUserInfo({...userInfo, email: dados.email,nome: dados.nome})
        }
        } catch (erro) {
            return;
        }
    }

    const desconectarUser = () => {
        setUserInfo({
            nome:'',
            email:'',
            foto: '../assets/images/user.png'
        })
    }

    return(
        <IdContext.Provider value={{userInfo, setUserInfo, desconectarUser, pegarUsuario}} >
            {children}
        </IdContext.Provider>
        )
}

