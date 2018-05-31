import React, { Component } from 'react'

import { Tab, Tabs, withStyles } from '@material-ui/core'
import tasksCardStyle from 'assets/jss/material-dashboard-react/tasksCardStyle'

class DateRangeTabs extends Component {
  state = {
    selectedDateRangeIndex: 2,
  }

  handleChange(selectedDateRangeIndex) {
    this.setState(s => Object.assign({}, s, { selectedDateRangeIndex }))
  }

  render() {
    const { classes } = this.props

    return (
      <Tabs
        classes={{
          flexContainer: classes.tabsContainer,
          indicator: classes.displayNone,
        }}
        value={this.state.selectedDateRangeIndex}
        onChange={(_, i) => this.handleChange(i)}
        textColor="inherit"
      >
        {['Per Day', 'Per Week', 'Per Month', 'Rest Of Year'].map(label => (
          <Tab
            classes={{
              wrapper: classes.tabWrapper,
              labelIcon: classes.labelIcon,
              label: classes.label,
            }}
            key={label}
            label={label}
          />
        ))}
      </Tabs>
    )
  }
}

export default withStyles(tasksCardStyle)(DateRangeTabs)
