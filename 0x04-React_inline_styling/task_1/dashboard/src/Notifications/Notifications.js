import React, { Component } from 'react';
import close_icon from '../close-icon.png';
import { getLatestNotification } from '../utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  Notifications: {
    padding: '1em',
    border: '2px dashed red',
    position: 'absolute',
    top: '10px',
    width: '95vw',
  },
  menuItem: {
    textAlign: 'right',
  },
  defaultPriority: {
    color: 'blue',
  },
  urgentPriority: {
    color: 'red',
  },
});
class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

   // Implementing shouldComponentUpdate to optimize re-rendering
  shouldComponentUpdate(nextProps) {
    // Only update if the new listNotifications has more items than the previous one
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className={css(styles.menuItem)}>
          Your notifications
        </div>
        {displayDrawer && 
        <div className={css(styles.Notifications)}>
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
                      markAsRead={this.markAsRead}
                      id={notification.id}
                    />
                  ))
                )}
            </ul>
        </div>}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
