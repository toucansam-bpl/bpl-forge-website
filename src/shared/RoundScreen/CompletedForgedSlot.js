import React from 'react'
import { Link } from 'react-router-dom'
import { 
          Avatar,
          Grid,
          Typography,
        } from '@material-ui/core'
import CheckCircle from '@material-ui/icons/CheckCircle'


export default ({ address, classes, name, rank, slot, timestamp, totalForged, vote, }) =>
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
            {`Slot ${slot} - `}
            <Link to={`delegate/${address}`}>
              {name}
            </Link>
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
  