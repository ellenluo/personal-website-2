import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { scrollTo } from '../utils'

type Props = {
  activePage: string
  setActivePage: (page: string) => {}
}

const Navigation = ({ activePage, setActivePage }: Props) => {
  const buttonStyle = {
    color: 'text.primary',
    textTransform: 'capitalize',
    transition: 'color 0.5s ease',
    width: 110,
  }
  const activeStyle = {
    ...buttonStyle,
    '&.Mui-disabled': {
      color: 'primary.main',
    },
  }
  const onClickNav = (page: string) => {
    setActivePage(page)
    scrollTo(page)
  }
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
        padding: '16px',
        position: 'fixed',
        top: 0,
        transition: 'none',
        zIndex: 1000,
      }}
    >
      <Toolbar>
        <Button
          disabled={activePage === 'home'}
          onClick={() => onClickNav('home')}
          size="large"
          sx={activePage === 'home' ? activeStyle : buttonStyle}
          variant="text"
        >
          Home
        </Button>
        <Button
          disabled={activePage === 'work'}
          onClick={() => onClickNav('work')}
          size="large"
          sx={activePage === 'work' ? activeStyle : buttonStyle}
          variant="text"
        >
          Work
        </Button>
        <Button
          disabled={activePage === 'climbing'}
          onClick={() => onClickNav('climbing')}
          size="large"
          sx={activePage === 'climbing' ? activeStyle : buttonStyle}
          variant="text"
        >
          Climbing
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
