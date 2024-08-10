import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultPriority: {
    color: 'blue',
  },
  urgentPriority: {
    color: 'red',
  },
  notificationItem: {
    width: '100%',            // Full screen width
    borderBottom: '1px solid black', // Black border at the bottom
    fontSize: '20px',          // Font size of 20px
    padding: '10px 8px',       // Padding of 10px 8px
    boxSizing: 'border-box',   // Ensure padding doesn't affect width
  },
});

const NotificationItem = ({ type, html, value, markAsRead, id }) => {
  const priorityStyle = type === 'default' ? styles.defaultPriority : styles.urgentPriority;

  if (html) {
    return (
      <li
        className={css(styles.notificationItem, priorityStyle)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html ? { __html: html.__html } : undefined}
        onClick={() => markAsRead(id)}
      ></li>
    );
  }

  return (
    <li
      className={css(styles.notificationItem, priorityStyle)}
      data-notification-type={type}
      onClick={() => markAsRead(id)}
    >
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
};

export default React.memo(NotificationItem, (prevProps, nextProps) => {
  return (
    prevProps.type === nextProps.type &&
    prevProps.value === nextProps.value &&
    prevProps.html?.__html === nextProps.html?.__html &&
    prevProps.markAsRead === nextProps.markAsRead &&
    prevProps.id === nextProps.id
  );
});
