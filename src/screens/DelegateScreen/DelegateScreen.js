import React, { Component } from 'react'

import { Grid } from '@material-ui/core'
import { RegularCard, Table, ItemGrid } from 'components'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import toCryptoFormat from '../../util/toCryptoFormat'
import fromApiString from '../../util/fromApiString'
import BplPrice from '../BplPrice'

@inject('delegateStore')
@observer
export default class DelegateScreen extends Component {
  async componentDidMount() {
    const { delegateStore, match } = this.props
    delegateStore.setSelectedAddress(match.params.address)
  }

  render() {
    const { delegateStore } = this.props
    const title = delegateStore.hasSelectedDelegate
      ? `Delegate ${delegateStore.selectedDelegate.username}`
      : 'Unfound Delegate'

    return (
      <Grid container>
        <ItemGrid xs={12} sm={9}>
          <RegularCard
            cardTitle={title}
            cardSubtitle=""
            content={
              delegateStore.hasSelectedDelegate ? (
                <div>
                  <h2>Delegate Stake</h2>
                  <h3>
                    {toCryptoFormat(
                      fromApiString(delegateStore.selectedDelegate.vote)
                    )}{' '}
                    BPL
                  </h3>
                </div>
              ) : (
                <div>No delegate</div>
              )
            }
          />
        </ItemGrid>

        <ItemGrid xs={12} sm={3}>
          <BplPrice />
        </ItemGrid>
      </Grid>
    )
  }
}
