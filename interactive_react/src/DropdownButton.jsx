import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import "./App.css"

const DropdownButton = ({ buttonText, open, toggle }) => {
  return (
    <div onClick={toggle}
    className={`dropdownButton ${open ? "button-open":null}`}>
      {buttonText}
    <span className='toggle'>{open ? <FaChevronUp/>:<FaChevronDown/>}</span>
    </div>
  );
}

export default DropdownButton