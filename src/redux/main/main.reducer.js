import {mainActionTypes} from './main.types';

const INITIAL_STATE = [
    {
        name: 'overalls',
        route: '/categories/overalls',
        pic: '/main-images/overalls.webp',
        blockType: 'MediumCategory'
    },
    {
        name: 'socks',
        route: '/categories/socks',
        pic: '/main-images/socks.webp',
        blockType: 'MediumCategory'
    },
    {
        name: 'hats',
        route: '/categories/hats',
        pic: '/main-images/hats.webp',
        blockType: 'MediumCategory'
    },
    {
        name: 'dogs',
        route: '/categories/dogs',
        pic: '/main-images/dogs.webp',
        blockType: 'LargeCategory'
    },
    {
        name: 'cats',
        route: '/categories/cats',
        pic: '/main-images/cats.webp',
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