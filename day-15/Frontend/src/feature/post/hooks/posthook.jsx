import { useContext } from "react";
import PostContext from "../post.context";
import { getFeed , createPost } from "../services/post.api";

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

    const handleCreatePost = async (ImageFile , caption) =>{
        setLoading(true)
        try{
            const response = await createPost(ImageFile , caption)
            console.log(response)
            setPosts(response.posts)
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
        handlingGetFeed,
        handleCreatePost
    }
}

export default usePost