import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import './App.css';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList'
import { getLatestNotification } from '../utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
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

  const { isLoggedIn, logOut } = this.props;
  return (
    <>
    <Notifications displayDrawer={true} listNotifications={listNotifications} />
    <div className="App">
      <Header />
      {isLoggedIn ? (
        <BodySectionWithMarginBottom title="Course list"> <CourseList listCourses={listCourses}/> </BodySectionWithMarginBottom>
      ) : (
        <BodySectionWithMarginBottom title="Log in to continue"> <Login /> </BodySectionWithMarginBottom>
      ) }
       <BodySection title="News from the School">
              <p>Here is some random text for the news section of the school.</p>
        </BodySection>
      <Footer />
    </div>
    </>
  );
}
}
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
  listCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
};

App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {},
};
export default App;
