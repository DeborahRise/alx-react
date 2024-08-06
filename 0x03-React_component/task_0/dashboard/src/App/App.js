import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications';
import CourseList from '../CourseList/CourseList'

  const listCourses = [
    {
      id: 1,
      name: 'ES6',
      credit: 60
    },
    {
      id: 2,
      name: 'Webpack',
      credit: 20
    },
    {
      id: 3,
      name: 'React',
      credit: 40
    }
  ];

  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
  ];

class App extends Component {
  render() {

  const { isLoggedIn } = this.props;
  return (
    <>
    <Notifications displayDrawer={false} listNotifications={listNotifications} />
    <div className="App">
      <Header />
      {isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login />}
      <Footer />
    </div>
    </>
  );
}
}
App.PropTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false
};
export default App;
