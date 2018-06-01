import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { Tab, Tabs, withStyles } from '@material-ui/core'
import tasksCardStyle from 'assets/jss/material-dashboard-react/tasksCardStyle'

const timeSpans = ['Per Day', 'Per Week', 'Per Month', 'Rest Of Year']

@inject('ui')
@observer
class DateRangeTabs extends Component {
  onTimeSpanChange = (_, i) => {
    const { ui } = this.props

    ui.setTimeSpan(timeSpans[i])
  }

  render() {
    const { classes, ui } = this.props

    return (
      <Tabs
        classes={{
          flexContainer: classes.tabsContainer,
          indicator: classes.displayNone,
        }}
        value={timeSpans.indexOf(ui.timeSpan)}
        onChange={this.onTimeSpanChange}
        textColor="inherit"
      >
        {timeSpans.map(label => (
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
