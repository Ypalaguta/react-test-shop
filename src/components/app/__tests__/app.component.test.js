import React from 'react';
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";

import {App} from '../app.component'
import Loader from '../../loader/loader.components';

describe('App component tests', () => {
    let wrapper;
    const mockProps = {
        userChecked: true,
        userStatus: true
    }
    test('app component render snapshot', () => {
        wrapper = shallow(<App {...mockProps}/>);
        // const wrapper = shallow(<Provider store={store}> <App/> </Provider>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    test('loader before data appears', () => {
        const testProps = {
            ...mockProps,
            userChecked: false,
        }
        wrapper = shallow(<App {...testProps}/>)
        expect(wrapper.find(Loader)).toHaveLength(1);
    })
})

