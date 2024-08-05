import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications';
import CourseList from '../CourseList/CourseList'

function App({ isLoggedIn}) {
  return (
    <>
    <Notifications />
    <div className="App">
      <Header />
      {isLoggedIn ? <CourseList/> : <Login />}
      <Footer />
    </div>
    </>
  );
}

App.PropTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false
};
export default App;
