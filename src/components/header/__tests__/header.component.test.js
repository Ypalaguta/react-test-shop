import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {Link} from 'react-router-dom'
import {HeaderLink, LinkLike} from '../header.styles'

import {Header} from '../header.component';

describe('header rendering', () => {
    let wrapper;
    // beforeEach(()=>{
    //     wrapper = shallow(<Header {...mockProps}/>)
    // })
    const mockProps = {
        cart: {
            items: {}
        },
        userStatus: true,
        toggleCart: jest.fn(),
    }

    test('header structure test', () => {
        wrapper = shallow(<Header {...mockProps}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('cart 5 items', () => {
        const testProps = {
            ...mockProps,
            cart: {
                items: {
                    overall1: {
                        category: "overalls",
                        count: 4,
                        id: "overall1",
                        name: "overall 1",
                        pic: "/categories-images/overalls/overall-1.webp",
                        price: "1.5"
                    },
                    overall2: {
                        category: "overalls",
                        count: 1,
                        id: "overall1",
                        name: "overall 1",
                        pic: "/categories-images/overalls/overall-1.webp",
                        price: "1.5"
                    },
                }
            },
        }
        wrapper = shallow(<Header {...testProps}/>)
        expect(wrapper.find(LinkLike).at(1).text()).toEqual('Cart(5)');
        // expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('cart 0 items', () => {
        wrapper = shallow(<Header {...mockProps}/>)
        expect(wrapper.find(LinkLike).at(1).text()).toEqual('Cart')
    })

    test('not signed user', () => {
        wrapper = shallow(<Header {...mockProps} userStatus={false} />)
        expect(wrapper.find(HeaderLink).at(2).text()).toEqual('Sign In')
    })

    test('signed user', () => {
        wrapper = shallow(<Header {...mockProps} userStatus={true} />)
        expect(wrapper.find(LinkLike).at(0).text()).toEqual('Sign Out')
    })
})