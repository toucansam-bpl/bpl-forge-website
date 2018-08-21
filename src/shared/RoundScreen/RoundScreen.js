import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Collapse, Grid, List, ListItem, withStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import AnnouncementIcon from '@material-ui/icons/Announcement'
import CheckCircle from '@material-ui/icons/CheckCircle'
import UpdateIcon from '@material-ui/icons/Update'


const styles = theme => ({
  missedBlockAvatar: {
    backgroundColor: theme.palette.error.main,
  },
  successfulBlockAvatar: {
    backgroundColor: theme.palette.primary.main,
  },
})

const CompletedSlot = withStyles(styles)(({ hasMissedBlock, ... rest, }) =>
  hasMissedBlock
    ? (<CompletedMissedSlot {... rest} />)
    : (<CompletedForgedSlot {... rest} />)
)

const CompletedForgedSlot = ({ classes, name, slot, timestamp, }) =>
  <React.Fragment>
    <Avatar className={classes.successfulBlockAvatar}>
      <CheckCircle />
    </Avatar>
    <ListItemText
      primary={`${slot} - ${name}`}
      secondary={`Forged at: ${new Date(timestamp).toLocaleString()}`}
    />
  </React.Fragment>

const CompletedMissedSlot = ({ classes, name, slot, timestamp, }) =>
  <React.Fragment>
    <Avatar className={classes.missedBlockAvatar}>
      <AnnouncementIcon />
    </Avatar>
    <ListItemText
      primary={`${slot} - ${name}`}
      secondary={`Missed block at: ${new Date(timestamp).toLocaleString()}`}
    />
  </React.Fragment>

const UpcomingSlot = ({ slot, name, timestamp }) =>
  <React.Fragment>
    <Avatar>
      <UpdateIcon />
    </Avatar>
    <ListItemText
      primary={`${slot} - ${name}`}
      secondary={`Expected at: ${new Date(timestamp).toLocaleString()}`}
    />
  </React.Fragment>


class RoundScreen extends Component {
  state = {
    hasProcessedIncoming: false,
    hasProcessedOutgoing: false,
  }

  incomingComplete() {
    console.log('incoming complete', this.state)
    if (!this.state.hasProcessedIncoming) {
      this.props.roundStore.completeSlotTransition()
      this.setState(s => ({
        ...s,
        hasProcessedIncoming: true,
        hasProcessedOutgoing: false,
      }))
    }
  }

  outgoingComplete() {
    console.log('outgoing complete', this.state)
    if (!this.state.hasProcessedOutgoing) {
      this.props.roundStore.transferSlots()
      this.setState(s => ({
        ...s,
        hasProcessedIncoming: false,
        hasProcessedOutgoing: true,
      }))
    }
  }

  render() {
    const { classes, roundStore } = this.props

    return (
      <Grid container>
        <Grid item xs={8}>

          {roundStore.init.match({
            pending: () => <div>Loading, please wait..</div>,
            rejected: (err) => <div>Error: {err.message}</div>,
            resolved: () => (
              <List>
                {roundStore.outgoingUpcomingSlots.map(forger =>
                  <Collapse 
                    component={ListItem}
                    in={!roundStore.hasOutgoingSlots}
                    key={forger.slot}
                    timeout={500}
                    onExited={() => this.outgoingComplete()}
                  >
                    <UpcomingSlot {... forger} />
                  </Collapse>
                )}
                {roundStore.upcomingSlots.map(forger =>
                  <ListItem key={forger.slot}>
                    <UpcomingSlot {... forger} />
                  </ListItem>
                )}
              </List>
            )
          })} 
        </Grid>

        <Grid item xs={4}>
          {roundStore.init.match({
            pending: () => <div>Loading, please wait..</div>,
            rejected: (err) => <div>Error: {err.message}</div>,
            resolved: () => (
              <List>
                {roundStore.incomingCompletedSlots.map(forger =>
                  <Collapse 
                    component={ListItem}
                    in={roundStore.hasIncomingSlots} 
                    key={forger.slot}
                    timeout={500}
                    onEntered={() => this.incomingComplete()}
                  >
                    <CompletedSlot {... forger} />
                  </Collapse>
                )}
                {roundStore.completedSlots.map(forger =>
                  <ListItem key={forger.slot}>
                    <CompletedSlot {... forger} />
                  </ListItem>
                )}
              </List>
            )
          })} 
        </Grid>
        
      </Grid>
    )
  }
}

export default withStyles(styles)(inject('roundStore')(observer(RoundScreen)))
