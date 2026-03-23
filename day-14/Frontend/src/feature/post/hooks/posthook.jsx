import { useContext } from "react";
import PostContext from "../post.context";
import { getFeed } from "../services/post.api";

export const usePost = () => {
    const { posts, setPosts, loading, setLoading, feed, setfeed } = useContext(PostContext)

    const handlingGetFeed = async () =>{
        setLoading(true)
        try{
            const response = await getFeed()
            console.log(response)
            setfeed(response.posts)
        }catch(error){
            console.log("Error in useposthook" , error.message)
        }finally{
            setLoading(false)
        }
    }
    return {
        posts,
        setPosts,
        loading,
        setLoading,
        feed,
        setfeed,
        handlingGetFeed
    }
}

export default usePost