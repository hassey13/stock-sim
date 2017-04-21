import React from 'react'

const Intro = ( props ) => (
  <div className='intro'>
    <p className='intro-text'>Do you want to invest in Button?</p>
    <a href='#' onClick={ props.onClick } className='intro-button blue' >Yes!</a>
  </div>
)

export default Intro
