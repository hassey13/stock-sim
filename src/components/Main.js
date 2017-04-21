import React from 'react'

import Investments from '../containers/Investments'
import StockData from './StockData'
import StockHeadlines from './StockHeadlines'

const Main = (
  props
) => (
  <div className='header'>
    <Investments stock={ props.stock } />
    <StockData stock={ props.stock } />
    <StockHeadlines stock={ props.stock } />
  </div>
)

export default Main
