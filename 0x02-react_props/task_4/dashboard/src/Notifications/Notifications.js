import React from 'react';
import './Notifications.css';
import close_icon from './close-icon.png';
import { getLatestNotification } from '../utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';


const Notifications = ({ displayDrawer }) => {
  return (
    <>
    <div className='menuItem'>
      Your notifications
    </div>
    {displayDrawer && 
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
        <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} />
        </ul>
    </div>}
    </>
  )
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false
};
export default Notifications