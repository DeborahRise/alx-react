import React from 'react';
import App from './App';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { shallow } from 'enzyme';


describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it("should render Notifications component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Notifications />)).toBe(true);
  });
  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });
  it("should render Login Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(true);
  });
  it("should render Footer component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });
  it("check that CourseList is not displayed when not logged in", () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.find(CourseList).exists()).toBe(false);
  });

  describe("when isLoggedIn is true", () => {
    it("does not render Login component", () => {
      const component = shallow(<App isLoggedIn={true} />);
      expect(component.find(Login).exists()).toBe(false);
    });

    it("renders CourseList component", () => {
      const component = shallow(<App isLoggedIn={true} />);
      expect(component.find(CourseList).exists()).toBe(true);
    });
  });
});