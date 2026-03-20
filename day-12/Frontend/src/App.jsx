import React from 'react'
import { AppRoutes } from './AppRoutes'
import { AuthProvider } from './feature/auth.context'
import "./feature/shared/global.scss";

export const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>

  )
}

export default App