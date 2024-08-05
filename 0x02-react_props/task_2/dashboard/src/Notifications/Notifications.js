import React from 'react';
import './Notifications.css';
import close_icon from './close-icon.png';
import { getLatestNotification } from '../utils';
const Notifications = () => {
  return (
    <div className='Notifications'>
        <button
        onClick={() => console.log('Close button has been clicked')}
        style={{position:'absolute', top:0, right:0}}
        aria-label='Close'>
          <img src={close_icon} width="10px" height="10px" alt='close icon'/>
        </button>
        <p>Here is the list of notifications</p>
        <ul>
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem type='urgent' html={getLatestNotification()} />
        </ul>
    </div>
  )
}

export default Notifications