import React from 'react'
import PropTypes, { string } from 'prop-types';

const NotificationItem = ({ type, html, value}) => {
  if (html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li>;
  }
  return <li data-notification-type={type}>{value}</li>;
};

NotificationItem.PropTypes = {
  html: PropTypes.__html,
  value: PropTypes.string,
  type: PropTypes.string.isRequired
}

NotificationItem.defaultProps = {
  type: 'default',
  value: string
}
export default NotificationItem