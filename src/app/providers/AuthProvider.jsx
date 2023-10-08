import {createContext, useState} from 'react'

import {TOKEN} from '../api/app.constants.js'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem(TOKEN))

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
