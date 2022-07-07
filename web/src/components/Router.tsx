import React from 'react'
import { Navigate, Routes, Route, Link } from 'react-router-dom'

import Main from '../pages/Main'

const Router = () => (
  <Routes>
    <Route element={<Main />} path="/home" />
    <Route path="*" element={<Navigate to="/home" replace />} />
  </Routes>
)

export default Router
