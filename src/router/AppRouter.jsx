import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CheckingAuth } from '../ui/components'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '../firebase/config'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalApp } from '../JournalApp'
import { JournalRoutes } from '../journal/router/JournalRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../store/auth/AuthSlice'
import { useCheckAuth } from '../hooks'


export const AppRouter = () => {

  const status = useCheckAuth()

  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>

      {
        status === 'authenticated'
        ?  <Route path='/*' element={<JournalRoutes />} />
        : <Route path='auth/*' element={<AuthRoutes />} />
      }

<Route path='/*' element={<Navigate to={'/auth/login'} />} />
      
    </Routes>
  )
}
