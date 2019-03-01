import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { 
          Avatar,
          Card,
          CardContent,
          Table,
          TableBody,
          TableCell,
          TableHead,
          TableRow,
          withStyles,
        } from '@material-ui/core'
import green from '@material-ui/core/colors/green'

import AnnouncementIcon from '@material-ui/icons/Announcement'
import CheckCircle from '@material-ui/icons/CheckCircle'
import UpdateIcon from '@material-ui/icons/Update'

const styles = theme => ({
  missedBlockAvatar: {
    backgroundColor: theme.palette.error.main,
  },
  successfulBlockAvatar: {
    backgroundColor: green[500],
  },
})

const Slot = withStyles(styles)(({ key, hasBeenCompleted, hasMissedBlock, ... rest, }) => {
  const diff = hasBeenCompleted
    ? hasMissedBlock
      ? {
        className: rest.classes.missedBlockAvatar,
        component: AnnouncementIcon,
        Forged: () => <TableCell align="center">{ 'missed' }</TableCell>,
      } : {
        className: rest.classes.successfulBlockAvatar,
        component: CheckCircle,
        Forged: () => <TableCell align="right">{rest.totalForged.toFixed(4)}</TableCell>,
      }
    : {
      className: '',
      component: UpdateIcon,
      Forged: () => <TableCell align="center">{ '--' }</TableCell>,
    }

  return (
    <TableRow key={key}>
      <TableCell>
        <Avatar className={diff.className}>
          <diff.component />
        </Avatar>
      </TableCell>
      <TableCell align="right">{rest.slot}</TableCell>
      <TableCell>{rest.name}</TableCell>
      <TableCell align="right">{rest.rank}</TableCell>
      <TableCell align="right">{Number(rest.vote.toFixed(0)).toLocaleString()}</TableCell>
      <diff.Forged />
      <TableCell align="right">{new Date(rest.timestamp).toLocaleString()}</TableCell>
    </TableRow>
  )
})


class RoundSlots extends Component {
  render() {
    const { slotStore } = this.props

    return (
      <Card>
        <CardContent>
          {slotStore.init.match({
            pending: () => <div>Loading, please wait..</div>,
            rejected: (err) => <div>Error: {err.message}</div>,
            resolved: () => (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>&nbsp;</TableCell>
                    <TableCell align="right">Slot</TableCell>
                    <TableCell>Delegate</TableCell>
                    <TableCell align="right">Rank</TableCell>
                    <TableCell align="right">Vote</TableCell>
                    <TableCell align="right">Forged (BPL)</TableCell>
                    <TableCell align="right">Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {slotStore.slots.map(forger => (
                    <Slot key={forger.slot} {...forger} />
                  ))}
                </TableBody>
              </Table>
            )
          })} 
        </CardContent>
      </Card>
    )
  }
}

export default inject('slotStore')(observer(RoundSlots))
