import React from 'react';
import Navbar from './components/Navbar'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'

import './App.css';
import generalStyle from './utils/theme'

const theme = createMuiTheme(generalStyle)

const styles = {
  button: {
      position: 'absolute',
      right: '45%',
      top: '80%'
  }
}

const App = (props) => {
  const { classes } = props
  return (
    <ThemeProvider theme={theme}>
    <Navbar />
      <div className='nav-container'>
        <div className='firstPage'>
          <Button
            className={classes.button}
            type='submit'
            variant='contained'
            color='primary'
          >
            Learn more
          </Button>
        </div>
        <div className='secondPage'>
          Daddy
        </div>
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
