import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Collapse, List, ListItem, } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import UpdateIcon from '@material-ui/icons/Update'


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

const CollapsableSlot = inject('slotStore')(observer(({ slotStore, }) =>
  <Collapse 
    component={ListItem}
    in={slotStore.slotInProcess.shouldBeVisible}
    key={slotStore.slotInProcess.slot.slot}
    timeout={500}
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
