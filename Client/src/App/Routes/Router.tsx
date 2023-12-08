import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home/HomeScreen'
import { Private } from '../Pages/Private/PrivateScreen'
import { RequireAuth } from '../Shared/Contexts/Auth/RequireAuth'

const RouterPages = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Private" element={<RequireAuth><Private/></RequireAuth>}/>
        </Routes>
    </>
  )
}

export default RouterPages