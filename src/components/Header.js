import React from 'react'

import Heading from './Heading'
import Ticker from './Ticker'

const Header = ( props ) => (
  <div className='header'>
    <Heading stock={ props.stock } />
    <Ticker stock={ props.stock } />
    <hr />
  </div>
)

export default Header
