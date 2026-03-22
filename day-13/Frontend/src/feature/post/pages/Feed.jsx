import React, { useEffect } from 'react'
import '../style/post.scss'
import Post from '../components/Post'
import { usePost } from '../hooks/posthook'

export const Feed = () => {

  const { feed, handlingGetFeed, loading } = usePost()

  useEffect(() => {
    handlingGetFeed()
  }, [])

  console.log(feed)
  if (loading || !feed) {
    return <div>Loading...</div>
  }

  return (
    <main className="feed-page">
      <div className="feed-container">
        {feed.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </main>
  )
}

export default Feed