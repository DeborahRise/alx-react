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
})

const NotificationItem = ({ type, html, value, markAsRead, id }) => {
  if (html) {
    return <li className={type==='default' ? css(styles.defaultPriority) : css(styles.urgentPriority)} data-notification-type={type}
    dangerouslySetInnerHTML={html ? { __html: html.__html } : undefined}
    onClick={() => markAsRead(id)}></li>;
  }
  return <li className={type==='default' ? css(styles.defaultPriority) : css(styles.urgentPriority)} data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>;
};



NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
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
