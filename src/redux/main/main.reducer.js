import {mainActionTypes} from './main.types';

const INITIAL_STATE = [
    {
        name: 'overalls',
        route: '/categories/overalls',
        pic: '/main-images/overalls.jpg',
        blockType: 'MediumCategory'
    },
    {
        name: 'socks',
        route: '/categories/socks',
        pic: '/main-images/socks.jpg',
        blockType: 'MediumCategory'
    },
    {
        name: 'hats',
        route: '/categories/hats',
        pic: '/main-images/hats.jpg',
        blockType: 'MediumCategory'
    },
    {
        name: 'dogs',
        route: '/categories/dogs',
        pic: '/main-images/dogs.jpg',
        blockType: 'LargeCategory'
    },
    {
        name: 'cats',
        route: '/categories/cats',
        pic: '/main-images/cats.jpg',
        blockType: 'LargeCategory'
    },
]

const mainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default mainReducer;