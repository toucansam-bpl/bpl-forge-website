import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Link, } from 'react-router-dom'
import {
  AppBar,
  FilledInput,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'

import logo from '../../public/img/bpl-logo.png'


const styles = theme => ({
  flex: {
    flex: 1,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  headerLink: {
    color: '#fff',
    textDecoration: 'none',
  },
})


class AppToolbar extends Component {
  handleServerChange(evt) {
    console.log(evt.target.value)
    this.props.networkStore.setApiServer(evt.target.value)
  }

  render() {
    const { classes, networkStore, } = this.props

    return (
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

          <form>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel htmlFor="server">Server</InputLabel>
              <Select
                value={networkStore.apiServer.name}
                onChange={evt => this.handleServerChange(evt)}
                input={<FilledInput name="server" id="server" />}
              >
                {networkStore.apiServers.map(server =>
                  (<MenuItem key={server.name} value={server.name}>{server.name}</MenuItem>)
                )}
              </Select>
            </FormControl>
          </form>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(inject('networkStore')(observer(AppToolbar)))
