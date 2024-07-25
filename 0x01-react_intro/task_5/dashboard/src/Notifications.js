import React from 'react'
import './Notifications.css'
import close_icon from './close-icon.png'
import { getLatestNotification } from './utils'
const Notifications = () => {
  return (
    <div className='Notifications'>
        <button
        onClick={() => console.log('Close button has been clicked')}
        style={{position:'absolute', top:0, right:0}}
        aria-label='Close'>
          <img src={close_icon} width="10px" height="10px"/>
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority='default'>New course available</li>
          <li data-priority='urgent'>New resume available</li>
          <li data-priority='urgent'>{getLatestNotification}</li>
        </ul>
    </div>
  )
}

export default Notifications