import React, { Component } from 'react';
import close_icon from '../close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const opacityKeyframes = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounceKeyframes = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
    }
  },
  Notifications: {
    padding: '0', // No padding
    border: '2px dashed red',
    position: 'fixed', // Fixed position to take over the entire screen
    top: '0',
    left: '0',
    right: '0',
    width: '50vw',
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
    return nextProps.listNotifications.length > this.props.listNotifications.length ||
            nextProps.displayDrawer !== this.props.displayDrawer;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <>
        {!displayDrawer && (
          <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
            Your notifications
          </div>
        )}
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
            <button
              onClick={handleHideDrawer}
              style={{ position: 'absolute', top: 0, right: 0 }}
              aria-label='Close'
            >
              <img src={close_icon} width="10px" height="10px" alt='close icon' />
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
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  
};

export default Notifications;
