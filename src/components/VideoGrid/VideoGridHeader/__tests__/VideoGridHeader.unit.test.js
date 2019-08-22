import React from 'react';
import {shallow} from 'enzyme';
import {VideoGridHeader} from '../VideoGridHeader';

describe('VideoGridHeader', () => {
    test('renders without props', () => {
        const wrapper = shallow(<VideoGridHeader/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('render with empty string header', () => {
        const wrapper = shallow(<VideoGridHeader title='' />);
        expect(wrapper).toMatchSnapshot();
    });

    test('renders with title', () => {
        const wrapper = shallow(<VideoGridHeader title='Trending' />);
        expect(wrapper).toMatchSnapshot();
    });
});