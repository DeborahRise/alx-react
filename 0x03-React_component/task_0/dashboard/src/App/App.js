import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    const { logOut } = this.props;
    if (event.ctrlKey && event.key=== 'h') {
      alert('Logging you Out');
      logOut();
    }
  }
  render() {

  // const { isLoggedIn, logOut } = this.props;
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
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};
export default App;
