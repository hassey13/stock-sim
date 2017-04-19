import React from 'react'

import Investment from './Investment'

const InvestmentsList = ( props ) => {

  if ( props.investments.length === 0 ) {
    return ( <p>You have no active investments!</p> )
  }

  return (
    <div>
      <ul>
        { props.investments.map( (investment, i) => (
          <Investment
            key={i} {...investment}
            onSellClick={ props.onSellClick }
            currentPrice={ props.currentPrice }
          />
        )
        )}
      </ul>
    </div>
  )
}
export default InvestmentsList
