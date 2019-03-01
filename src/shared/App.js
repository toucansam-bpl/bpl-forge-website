import React, { Component } from 'react'
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'

import AppToolbar from './AppToolbar';
import DelegateScreen from './DelegateScreen/DelegateScreen'
import RoundScreen from './RoundScreen/RoundScreen'


const styles = theme => ({
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100% - 123px)"
  },
})


class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <CssBaseline />
        <AppToolbar />

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
