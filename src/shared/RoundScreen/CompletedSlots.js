import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Collapse, List, ListItem, withStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import AnnouncementIcon from '@material-ui/icons/Announcement'
import CheckCircle from '@material-ui/icons/CheckCircle'


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

const CollapsableSlot = inject('slotStore')(observer(({ slotStore, }) =>
  <Collapse 
    component={ListItem}
    in={slotStore.slotInProcess.shouldBeVisible}
    key={slotStore.slotInProcess.slot.slot}
    timeout={500}
    onEntered={() => slotStore.slotJoinedCompleted()}
  >
    <CompletedSlot {... slotStore.slotInProcess.slot} />
  </Collapse>
))


class CompletedSlots extends Component {
  render() {
    const { slotStore } = this.props
    const Incoming = slotStore.hasSlotInProcess && slotStore.slotInProcess.hasLeftUpcoming
      ? <CollapsableSlot slot={slotStore.slotInProcess.slot} store={slotStore} />
      : null

    return (
      <React.Fragment>
        {slotStore.init.match({
          pending: () => <div>Loading, please wait..</div>,
          rejected: (err) => <div>Error: {err.message}</div>,
          resolved: () => (
            <List>
              {Incoming}
              {slotStore.completedSlots.map(forger =>
                <ListItem key={forger.slot}>
                  <CompletedSlot {... forger} />
                </ListItem>
              )}
            </List>
          )
        })} 
      </React.Fragment>
    )
  }
}

export default inject('slotStore')(observer(CompletedSlots))
