import React, { Component } from 'react'
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'
import { Link, Route, Switch } from 'react-router-dom'

import logo from '../../public/img/bpl-logo.png'
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
  headerLink: {
    color: '#fff',
    textDecoration: 'none',
  },
})


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
                <Link to="/" className={classes.headerLink}>BPL Delegate Explorer</Link>
              </span>
            </Typography>
          </Toolbar>
        </AppBar>

        <div className={classes.content}>
          <Switch>
            <Route path="/" exact component={RoundScreen} />
            <Route path="/delegate/:address" component={DelegateScreen} />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(App)
