import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value, markAsRead, id }) => {
  if (html) {
    return <li data-notification-type={type}
    dangerouslySetInnerHTML={html ? { __html: html.__html } : undefined}
    onClick={() => markAsRead(id)}></li>;
  }
  return <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>;
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

export default NotificationItem;
