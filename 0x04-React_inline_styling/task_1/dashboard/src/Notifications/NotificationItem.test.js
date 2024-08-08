import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe('NotificationItem', () => {
    it('Renders NotificationItem Component WIthout Crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toEqual(true)
    });
    it('renders props value and test correctly', () => {
        const wrapper = shallow(<NotificationItem />);
        wrapper.setProps({ type: 'default', value: 'test '});
        expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
    });
    it('renders props html correctly', () => {
        const wrapper = shallow(<NotificationItem type={'urgent'} />)
        wrapper.setProps({ html: '<u>test</u>' });
        expect(wrapper.html()).toEqual('<li data-notification-type="urgent"><u>test</u></li>')
    });
});