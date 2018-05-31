import React, { Component } from 'react'
import cx from 'classnames'

import { withStyles, AppBar, Toolbar, Button } from '@material-ui/core'

import './App.css'
import logo from 'assets/img/bpl-logo.png'
import appStyle from 'assets/jss/material-dashboard-react/appStyle.jsx'

import CalculatorScreen from 'screens/CalculatorScreen'

const mainPanelClasses = cx({
  width: 'auto',
})

class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.wrapper}>
        <div className={classes.mainPanel + mainPanelClasses} ref="mainPanel">
          <AppBar className={classes.appBar}>
            <Toolbar className={classes.container}>
              <div className={classes.flex}>
                <img
                  src={logo}
                  alt="BPL logo"
                  style={{ float: 'left', height: '40px' }}
                />
                <Button href="#" className={classes.title}>
                  Delegate Reward Calculator
                </Button>
              </div>
            </Toolbar>
          </AppBar>

          <div className={classes.content}>
            <CalculatorScreen />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(appStyle)(App)
