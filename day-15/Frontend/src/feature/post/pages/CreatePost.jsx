import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePost } from '../hooks/posthook'

const CreatePost = () => {

    const [caption, setCaption] = useState("")
    const postImageInputFileRef = useRef(null)

    const navigate = useNavigate()
    const { loading, handleCreatePost } = usePost()

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const file = postImageInputFileRef.current.files[0]

        if (!file) {
            alert("Please select an image")
            return
        }

        await handleCreatePost(file, caption)

        navigate("/")
    }

    return (
        <div className='create-post-container'>
            <div className="form-container">
                <h1>Create Post</h1>

                <form onSubmit={handleFormSubmit}>

                    <label htmlFor="image" className='post-image-label'>
                        Upload Image
                    </label>

                    <input
                        type="file"
                        ref={postImageInputFileRef}
                        hidden
                        name='image'
                        id='image'
                    />

                    <input
                        type="text"
                        placeholder='Caption'
                        name='caption'
                        id='caption'
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />

                    <button type='submit'>
                        {loading ? "Posting..." : "Post"}
                    </button>

                </form>
            </div>
        </div>
    )
}

export default CreatePost