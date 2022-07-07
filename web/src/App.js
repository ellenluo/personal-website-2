import React from 'react'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'

import NavBar from './components/NavBar'
import Router from './components/Router'

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "'Lato', 'Roboto', 'Helvetica Neue', sans-serif",
    },
  })
  const responsiveTheme = responsiveFontSizes(theme)

  return (
    <ThemeProvider theme={responsiveTheme}>
      <React.Fragment>
        <NavBar />
        <Router />
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
