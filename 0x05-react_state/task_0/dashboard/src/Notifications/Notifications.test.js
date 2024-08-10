import React from "react";
import { render, shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";


describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);

    expect(notification.exists).toBe(true);
  });

  // it("renders ul", () => {
  //   const notification = shallow(<Notifications />);

  //   expect(notification.find("ul")).toBeDefined();
  // });

  // it("renders three list items", () => {
  //   const notification = shallow(<Notifications />);

  //   expect(notification.find(NotificationItem)).toHaveLength(3);
  // });

  // it("renders correct text", () => {
  //   const notification = shallow(<Notifications />);

  //   expect(notification.find("p").text()).toBe("Here is the list of notifications");
  // });
  // it("renders first NotificationItem with correct html", () => {
  //   const notification = shallow(<Notifications />);
  //   const firstNotificationItem = notification.find(NotificationItem).at(0);
  //   expect(firstNotificationItem.html()).toContain("data-notification-type=\"default\"");
  //   expect(firstNotificationItem.html()).toContain("New course available");
  // });

  // it("checks that the menu item is being displayed when displayDrawer is false", () => {
  //   const component = shallow(<Notifications displayDrawer={false} />);
  //   expect(component.find('.menuItem').exists()).toBe(true);
  // });
  // it("check that the div.Notifications is not being displayed when displayDrawer is false", () => {
  //   const component = shallow(<Notifications displayDrawer={false} />);
  //   expect(component.find('.Notifications').exists()).toBe(false);
  // });
  // it("checks that the menu item is being displayed when displayDrawer is true", () => {
  //   const component = shallow(<Notifications displayDrawer={true} />);
  //   expect(component.find('.menuItem').exists()).toBe(true);
  // });
  // it("check that the div.Notifications is being displayed when displayDrawer is false", () => {
  //   const component = shallow(<Notifications displayDrawer={false} />);
  //   expect(component.find('.Notifications').exists()).toBe(true);
  // });

  // it('renders correct number of NotificationItem components', () => {
  //   const listNotifications = [
  //     { id: 1, type: 'default', value: 'New course available' },
  //     { id: 2, type: 'urgent', value: 'New resume available' },
  //     { id: 3, type: 'urgent', html: { __html: '<p>test</p>' } }
  //   ];
  //   const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  //   expect(wrapper.find(NotificationItem)).toHaveLength(3);
  // });

  // it('renders correctly when listNotifications is empty or not passed', () => {
  //   let wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
  //   expect(wrapper.find(NotificationItem)).toHaveLength(1);
  //   expect(wrapper.find(NotificationItem).prop('value')).toBe('No new notification for now');

  //   wrapper = shallow(<Notifications displayDrawer={true} />);
  //   expect(wrapper.find(NotificationItem)).toHaveLength(1);
  //   expect(wrapper.find(NotificationItem).prop('value')).toBe('No new notification for now');
  // });

  // it('calls markAsRead with correct ID', () => {
  //   const component = shallow(<Notifications displayDrawer={true} />);
  //   const anInstance = component.instance();
  //   anInstance.markAsRead(1);
  //   expect(ConsoleSpy).toBe('Notification 1 has been marked as read');
  // });
  // it('does not rerender when the same listNotifications prop is passed', () => {
  //   const listNotifications = [
  //     { id: 1, type: 'default', value: 'New course available' },
  //     { id: 2, type: 'urgent', value: 'New resume available' }
  //   ];

  //   const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    
  //   const renderSpy = jest.spyOn(wrapper.instance(), 'render');
  //   wrapper.setProps({ listNotifications });
  //   expect(renderSpy).not.toHaveBeenCalled();
    
  // });

  // it('rerenders when a longer listNotifications prop is passed', () => {
  //   const listNotifications = [
  //     { id: 1, type: 'default', value: 'New course available' },
  //     { id: 2, type: 'urgent', value: 'New resume available' }
  //   ];

  //   const longerListNotifications = [
  //     ...listNotifications,
  //     { id: 3, type: 'urgent', html: { __html: 'New data available' } }
  //   ];

  //   const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    
  //   const renderSpy = jest.spyOn(wrapper.instance(), 'render');
  //   wrapper.setProps({ listNotifications: longerListNotifications });

  //   expect(renderSpy).toHaveBeenCalled();
  // });
});