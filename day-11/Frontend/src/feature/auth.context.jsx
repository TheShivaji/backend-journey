import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
    const [User, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <AuthContext.Provider value={{User, setUser, loading ,setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext