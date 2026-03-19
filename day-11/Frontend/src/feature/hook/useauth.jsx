import { useContext } from "react";
import AuthContext from "../auth.context"
import { login, register } from "../services/auth.api";

export const useAuth = () => {

    const { User, setUser, loading, setLoading } = useContext(AuthContext);


    const handleLogin = async (email, password) => {
        setLoading(true);
        try {

            const response = await login(email, password);
            console.log(response)
            setUser(response.user);
        } catch (error) {
            console.error("LOGIN ERROR:", error.message);
        } finally {
            setLoading(false);
        }


    }

    const handleRegister = async (username , email , password) =>{
        setLoading(true)
        try{
            const response = await register(username , email , password)
            console.log(response)
            setUser(response.data)

        }catch(error){
            console.log("Error in useauthhook" , error.message)

        }finally{
            setLoading(false)
        }
    }

    return {
        User,
        loading,
        handleLogin,
        handleRegister,
        
    }
}