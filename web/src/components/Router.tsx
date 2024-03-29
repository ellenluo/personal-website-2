import React from 'react'
import { Navigate, Routes, Route, Link } from 'react-router-dom'

import Main from '../pages/Main'

type Props = {
  setActivePage: (page: string) => {}
}

const Router = ({ setActivePage }: Props) => (
  <Routes>
    <Route element={<Main setActivePage={setActivePage} />} path="/" />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)

export default Router
