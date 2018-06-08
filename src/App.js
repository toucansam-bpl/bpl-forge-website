import React, { Component } from 'react'

import {
  AppBar,
  Hidden,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'
import cx from 'classnames'
import { Link, Route, Switch } from 'react-router-dom'

import './App.css'
import logo from 'assets/img/bpl-logo.png'
import appStyle from 'assets/jss/material-dashboard-react/appStyle.jsx'

import CalculatorScreen from 'screens/CalculatorScreen'
import DelegateScreen from 'screens/DelegateScreen/DelegateScreen'
import RoundScreen from 'screens/RoundScreen/RoundScreen'

const mainPanelClasses = cx({
  flexGrow: 1,
  width: 'auto',
})

const appStyle2 = Object.assign({}, appStyle, {
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.wrapper}>
        <div className={classes.mainPanel + mainPanelClasses} ref="mainPanel">
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                <img
                  src={logo}
                  alt="BPL logo"
                  style={{ height: '1.16667em', verticalAlign: 'bottom' }}
                />
                <span style={{ marginLeft: '15px' }}>
                  <Link to="/">BPL Delegate Explorer</Link>
                </span>
              </Typography>

              <Link to="/calculator">Calculator</Link>
              <Hidden smDown>
                <Typography color="inherit" />
              </Hidden>
            </Toolbar>
          </AppBar>

          <div className={classes.content}>
            <Switch>
              <Route path="/" exact component={RoundScreen} />
              <Route path="/delegate/:address" component={DelegateScreen} />
              <Route path="/calculator" exact component={CalculatorScreen} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(appStyle2)(App)
