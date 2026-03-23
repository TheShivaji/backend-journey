import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

export const getFeed = async () => {
    const response = await api.get("/api/posts/feed");

    return response.data;

}

export const createPost = async (ImageFile, caption) => {
    const formdata = new FormData()

    formdata.append("Pushparaj", ImageFile)
    formdata.append("caption", caption)

    const response = await api.post("/api/posts", formdata)

    return response.data;
}




