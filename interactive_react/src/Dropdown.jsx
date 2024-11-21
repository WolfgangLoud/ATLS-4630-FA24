import { useState } from 'react';
import DropdownButton from './DropdownButton'
import DropdownContent from './DropdownContent'
import './App.css'

export default function Dropdown({buttonText,content})
{

    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open)
    }

  return (
    <div className='dropdown'>
        <DropdownButton toggle={toggleDropdown} open={open} buttonText={buttonText} />
        <DropdownContent content={content} open={open}/>
    </div>
  )
}

