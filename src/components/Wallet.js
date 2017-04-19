import React from 'react'

const Wallet = ( props ) => (
  <div className='wallet'>
    <p>You have ${ props.funds.toLocaleString() }</p>
  </div>
)

export default Wallet
