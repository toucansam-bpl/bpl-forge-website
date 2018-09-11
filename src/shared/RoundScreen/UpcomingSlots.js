import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { 
  Avatar,
  Collapse,
  Grid,
  List,
  ListItem,
  Typography,
} from '@material-ui/core'
import UpdateIcon from '@material-ui/icons/Update'

import { toHowLong } from '../domain/util/format'


const UpcomingSlot = ({ address, slot, name, rank, timestamp, vote, }) =>
  <React.Fragment>
    <Grid container spacing={16}>
      <Grid item>
        <Avatar>
          <UpdateIcon />
        </Avatar>
      </Grid>
      <Grid item xs={12} sm direction="column" container>
        <Grid item>
          <Typography gutterBottom variant="subheading">
            {`Slot ${slot} - `}
            <Link to={`delegate/${address}`}>
              {name}
            </Link>
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item xs={6}>
            <Typography gutterBottom>
              {`Rank ${rank}`}
            </Typography>
            <Typography color="textSecondary">
              {`Vote: ${vote.toFixed(0)} BPL`}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>
              {`${toHowLong(timestamp)}`}
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
    onExited={() => slotStore.slotLeftUpcoming()}
  >
    <UpcomingSlot {... slotStore.slotInProcess.slot} />
  </Collapse>
))


class UpcomingSlots extends Component {
  render() {
    const { slotStore } = this.props
    const Outgoing = slotStore.hasSlotInProcess && !slotStore.slotInProcess.hasLeftUpcoming
      ? <CollapsableSlot slot={slotStore.slotInProcess.slot} store={slotStore} />
      : null

    return (
      <React.Fragment>
        {slotStore.init.match({
          pending: () => <div>Loading, please wait..</div>,
          rejected: (err) => <div>Error: {err.message}</div>,
          resolved: () => (
            <List>
              {Outgoing}
              {slotStore.upcomingSlots.concat(slotStore.unprocessedSlots).map(forger =>
                <ListItem key={forger.slot}>
                  <UpcomingSlot {... forger} />
                </ListItem>
              )}
            </List>
          )
        })} 
      </React.Fragment>
    )
  }
}

export default inject('slotStore')(observer(UpcomingSlots))
