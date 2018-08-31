import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { 
          Avatar,
          Collapse,
          Grid,
          List,
          ListItem,
          ListItemText,
          Typography,
          withStyles,
        } from '@material-ui/core'
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

const CompletedForgedSlot = ({ classes, name, rank, slot, timestamp, totalForged, vote, }) =>
  <React.Fragment>
  <Grid container spacing={16}>
    <Grid item>
      <Avatar className={classes.successfulBlockAvatar}>
        <CheckCircle />
      </Avatar>
    </Grid>
    <Grid item xs={12} sm direction="column" container>
      <Grid item>
        <Typography gutterBottom variant="subheading">
          {`Slot ${slot} - ${name}`}
        </Typography>
      </Grid>
      <Grid item container>
        <Grid item xs={3}>
          <Typography gutterBottom>
            {`Rank ${rank}`}
          </Typography>
          <Typography color="textSecondary">
            {`Vote: ${vote.toFixed(0)} BPL`}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography gutterBottom>
            {`Forged ${totalForged.toFixed(4)} BPL`}
          </Typography>
          <Typography color="textSecondary">
            {`Total forged: x BPL`}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>
            {`${new Date(timestamp).toLocaleString()}`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  </React.Fragment>

const CompletedMissedSlot = ({ classes, name, rank, slot, timestamp, vote, }) =>
  <React.Fragment>
    <Grid container spacing={16}>
      <Grid item>
        <Avatar className={classes.missedBlockAvatar}>
          <AnnouncementIcon />
        </Avatar>
      </Grid>
      <Grid item xs={12} sm direction="column" container>
        <Grid item>
          <Typography gutterBottom variant="subheading">
            {`Slot ${slot} - ${name}`}
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item xs={3}>
            <Typography gutterBottom>
              {`Rank ${rank}`}
            </Typography>
            <Typography color="textSecondary">
              {`Vote: ${vote.toFixed(0)} BPL`}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography gutterBottom>
              {`Missed block`}
            </Typography>
            <Typography color="textSecondary">
              {`Total forged: x BPL`}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>
              {`${new Date(timestamp).toLocaleString()}`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
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
