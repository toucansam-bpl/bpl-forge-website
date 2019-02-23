import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Avatar,
  Grid,
  Typography,
} from '@material-ui/core'
import UpdateIcon from '@material-ui/icons/Update'

import { toHowLong } from '../domain/util/format'


export default ({ address, slot, name, rank, timestamp, vote, }) =>
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
