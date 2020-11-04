import {mainActionTypes} from './main.types';

const INITIAL_STATE = [
    {
        name: 'overalls',
        route: '/categories/overalls',
        pic: '/tempimages/overalls.jpg',
        blockType: 'MediumCategory'
    },
    {
        name: 'socks',
        route: '/categories/socks',
        pic: '/tempimages/socks.jpg',
        blockType: 'MediumCategory'
    },
    {
        name: 'hats',
        route: '/categories/hats',
        pic: '/tempimages/hats.jpg',
        blockType: 'MediumCategory'
    },
    {
        name: 'dogs',
        route: '/categories/dogs',
        pic: '/tempimages/dogs.jpg',
        blockType: 'LargeCategory'
    },
    {
        name: 'cats',
        route: '/categories/cats',
        pic: '/tempimages/cats.jpg',
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