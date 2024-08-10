import React from 'react';
import { mount } from 'enzyme'; // or use react-testing-library
import WithLogging from './WithLogging';
import Login from '../Login/Login';


describe('WithLogging', () => {
    let logSpy;
  
    beforeEach(() => {
      logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });
  
    afterEach(() => {
      logSpy.mockRestore();
    });
  
    // Test 1: For a pure HTML element
    it('logs to console on mount and unmount when wrapping an HTML element', () => {
      const WrappedComponent = WithLogging(() => <p />);
      const wrapper = mount(<WrappedComponent />);
      
      expect(logSpy).toHaveBeenCalledWith('Component Component is mounted');
      
      wrapper.unmount();
      
      expect(logSpy).toHaveBeenCalledWith('Component Component is going to unmount');
    });
  
    // Test 2: For the Login component
    it('logs to console on mount and unmount when wrapping the Login component', () => {
      const WrappedComponent = WithLogging(Login);
      const wrapper = mount(<WrappedComponent />);
      
      expect(logSpy).toHaveBeenCalledWith('Component Login is mounted');
      
      wrapper.unmount();
      
      expect(logSpy).toHaveBeenCalledWith('Component Login is going to unmount');
    });
  });
  