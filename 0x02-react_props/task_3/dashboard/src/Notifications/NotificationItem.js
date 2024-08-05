import React from 'react'

const NotificationItem = ({ type, html, value}) => {
  if (html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li>;
  }
  return <li data-notification-type={type}>{value}</li>;
};


export default NotificationItem