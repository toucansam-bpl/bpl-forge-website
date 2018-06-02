import React, { Component } from 'react'
import cx from 'classnames'

import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core'

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
            <Toolbar>
              <Typography variant="title" color="inherit">
                <img
                  src={logo}
                  alt="BPL logo"
                  style={{ height: '1.16667em', verticalAlign: 'bottom' }}
                />
                <span style={{ marginLeft: '15px' }}>
                  Delegate Reward Calculator
                </span>
              </Typography>
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
