import React, { Component } from 'react'
import {
  AppBar,
  CssBaseline,
  Hidden,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'
import { Link, Route, Switch } from 'react-router-dom'

import logo from '../../public/img/bpl-logo.png'
import CalculatorScreen from './CalculatorScreen/CalculatorScreen'
import DelegateScreen from './DelegateScreen/DelegateScreen'
import RoundScreen from './RoundScreen/RoundScreen'


const styles = theme => ({
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100% - 123px)"
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});


class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="fixed">
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
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(App)
