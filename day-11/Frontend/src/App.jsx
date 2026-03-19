import React from 'react'
import { AppRoutes } from './AppRoutes'
import { AuthProvider } from './feature/auth.context'


export const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>

  )
}

export default App