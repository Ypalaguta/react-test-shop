import {mainActionTypes} from './main.types';

const INITIAL_STATE = [
    {
        name: 'overalls',
        route: '/categories/overalls',
        pic: '/overalls.jpg',
        blockType: 'MediumCategory'
    },
    {
        name: 'socks',
        route: '/categories/socks',
        pic: '/socks.jpg',
        blockType: 'MediumCategory'
    },
    {
        name: 'hats',
        route: '/categories/hats',
        pic: '/hats.jpg',
        blockType: 'MediumCategory'
    },
    {
        name: 'dogs',
        route: '/categories/dogs',
        pic: '/dogs.jpg',
        blockType: 'LargeCategory'
    },
    {
        name: 'cats',
        route: '/categories/cats',
        pic: '/cats.jpg',
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