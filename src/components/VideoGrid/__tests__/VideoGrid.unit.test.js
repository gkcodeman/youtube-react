import React from 'react';
import {shallow} from 'enzyme';
import {VideoGrid} from '../VideoGrid';

describe('VideoGrid', () => {
    test('renders without props', () => {
        const wrapper = shallow(<VideoGrid/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('renders with title prop', () => {
        const wrapper = shallow(<VideoGrid title='Trending'/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('renders without divider', () => {
        const wrapper = shallow(<VideoGrid hideDivider={true} />);
        expect(wrapper).toMatchSnapshot();
    });
});

//stopped here VideoGrid.unit.test.js and VideoGridHeader.unit.test.js aren't creating snapshot folders. 
//Figure out why and retest them then move on to next steps.