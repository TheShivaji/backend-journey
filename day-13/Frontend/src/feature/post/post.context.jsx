import {  createContext , useState } from "react";

const PostContext = createContext();

export const PostProvider = ({children}) =>{
    const [posts , setPosts] = useState(null);
    const [loading , setLoading] = useState(true);
    const [feed, setfeed] = useState(null)

    return(
        <PostContext.Provider value={{posts , setPosts , loading , setLoading , feed , setfeed}}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContext