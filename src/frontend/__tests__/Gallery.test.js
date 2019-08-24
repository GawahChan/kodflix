import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Gallery from '../Components/Gallery/Gallery';
import Cover from '../Components/Gallery/Cover/Cover';

Enzyme.configure({ adapter: new Adapter() });

describe('Gallery Component', () => {

    it('renders without crashing', () => {
        shallow(<Gallery />);
    });
    it('calls componentDidMount', () => {
        const spy = jest.spyOn(Gallery.prototype, 'componentDidMount');
        const wrapper = mount(<Gallery />);
        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();
    });
});
