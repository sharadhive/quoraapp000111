import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Components/css/QuoraBox.css"
function QuoraBox() {
  return (
    <div className='quoraBox'>
        <div className='quoraBox__info'>
        <AccountCircleIcon />
        </div>
        <div className='quoraBox__quora'><h5>what is your question or link</h5></div>
    </div>
  )
}

export default QuoraBox