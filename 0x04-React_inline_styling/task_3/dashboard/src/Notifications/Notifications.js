import React, { Component } from 'react';
import close_icon from '../close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
  },
  Notifications: {
    padding: '0', // No padding
    border: '2px dashed red',
    position: 'fixed', // Fixed position to take over the entire screen
    top: '0',
    left: '0',
    right: '0',
    width: '100vw',
    backgroundColor: 'white',
    zIndex: '1000', // Ensure it stays on top of other elements
    fontSize: '20px', // Font size of 20px
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  ul: {
    padding: '0', // Remove padding from the ul element
    listStyleType: 'none', // Optionally remove list bullets
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
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
            className={css(styles.closeButton)}
            aria-label='Close'>
              <img src={close_icon} width="10px" height="10px" alt='close icon'/>
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.ul)}>
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
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
