import React from 'react'
import PropTypes, { string } from 'prop-types';

const NotificationItem = ({ type, html, value}) => {
  if (html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li>;
  }
  return <li data-notification-type={type}>{value}</li>;
};

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string,
  type: PropTypes.string.isRequired
}

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
}
export default NotificationItem