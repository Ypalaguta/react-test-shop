import React from 'react';
import {shallow} from "enzyme";
import {Provider} from 'react-redux';

import App from '../app.component'
import {store} from '../../../redux/store'

test('app component render snapshot', ()=>{
    const wrapper = shallow(<Provider store={store}> test </Provider>);
    // const wrapper = shallow(<Provider store={store}> <App/> </Provider>);
    expect(wrapper).toMatchSnapshot();
})