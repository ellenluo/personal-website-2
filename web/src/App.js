import React, {useState} from 'react'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'

import Navigation from './components/Navigation'
import Router from './components/Router'

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#5b16db',
      },
    },
    typography: {
      fontFamily: "'Lato', 'Roboto', 'Helvetica Neue', sans-serif",
    },
  })
  const responsiveTheme = responsiveFontSizes(theme)
  const [activePage, setActivePage] = useState('home')

  return (
    <ThemeProvider theme={responsiveTheme}>
      <React.Fragment>
        <Navigation activePage={activePage} setActivePage={setActivePage} />
        <Router setActivePage={setActivePage} />
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
