import React from 'react'
import "../style/post.scss"
import Post from '../components/Post'
export const feed = () => {
    return (
        <main className='feed-page'>
            <div className="feed-container">
                <Post />
            </div>
        </main >
    )
}

export default feed