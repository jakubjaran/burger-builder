import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavItems from './NavItems';
import NavItem from './NavItem/NavItem';

configure({adapter: new Adapter()});

describe('<NavItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavItems />);
    });

    it('should redner two <NavItem /> elements when not authenticated', () => {
        expect(wrapper.find(NavItem)).toHaveLength(2);
    });

    it('should redner three <NavItem /> elements when authenticated', () => {
        wrapper.setProps({isAuth: true});
        expect(wrapper.find(NavItem)).toHaveLength(3);
    });

    it('should redner logout <NavItem /> only when authenticated', () => {
        wrapper.setProps({isAuth: true});
        expect(wrapper.contains(<NavItem link="/logout">Logout</NavItem>)).toEqual(true);
    });
});