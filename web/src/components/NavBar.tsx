import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = () => {
  const { hash, pathname } = useLocation()

  const getNavLinkClass = (navHash: string, navPath: string) =>
    hash === navHash && pathname === navPath ? `${styles.active} ${styles.link}` : styles.link

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
        padding: '16px',
        transition: 'none',
      }}
    >
      <Toolbar>
        <NavLink className={getNavLinkClass('', '/home')} to="/home">
          Home
        </NavLink>
        <NavLink className={getNavLinkClass('#work', '/home')} to="/home#work">
          Work
        </NavLink>
        <NavLink className={getNavLinkClass('#climbing', '/home')} to="/home#climbing">
          Climbing
        </NavLink>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
