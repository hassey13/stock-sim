import React from 'react'

import Button from '../components/Button'
import InvestmentsList from '../components/InvestmentsList'

const InvestmentsPanel = ( props ) => (

  <div className='investments-panel'>
    <p>Investments</p>

    <InvestmentsList
      currentPrice={ props.currentPrice }
      investments={ props.investments }
      onSellClick={ props.onSellClick }
    />
    <Button text='Buy' onClick={ props.onBuyClick } />
  </div>
)

export default InvestmentsPanel
