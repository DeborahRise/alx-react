import React from 'react';
import './Notifications.css';
import close_icon from './close-icon.png';
import { getLatestNotification } from '../utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


const Notifications = ({ displayDrawer, listNotifications }) => {
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
        {listNotifications.length === 0 ? (
              <NotificationItem type='default' value='No new notification for now' />
            ) : (
              listNotifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))
            )}
        </ul>
    </div>}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications