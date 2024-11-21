import React from 'react'

import "./App.css"

const DropdownItem = ({item, onClick}) => {
  return (
    <div className='dropdown-item' onClick={onClick}>{item}</div>
  )
}

export default DropdownItem