import React from 'react'

import Heading from './Heading'
import Ticker from './Ticker'
import Investment from '../containers/Investment'

const Header = (
  props
) => (
  <div className='header'>
    <Heading />
    <Ticker price={ props.price } />
    <Investment price={ props.price } />
    <hr />
  </div>
)

export default Header
