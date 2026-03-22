import React from 'react'
import { AppRoutes } from './AppRoutes'
import { AuthProvider } from './feature/auth/auth.context'

import { PostProvider } from './feature/post/post.context';

export const App = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <AppRoutes />
      </PostProvider>
    </AuthProvider>

  )
}

export default App