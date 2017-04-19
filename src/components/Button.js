import React from 'react'

const Button = ( props ) => ( <button className={ `button-${props.text}`  } onClick={ props.onClick }>{ props.text }</button> )

export default Button
