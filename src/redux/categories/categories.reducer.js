import {categoriesActionTypes} from './categories.types';

const INITIAL_STATE = {
    overalls: [
        {
            id: 'overall1',
            name: 'overall 1',
            pic: '/overall-1.webp',
            price: '1.5',
            category: 'overalls'
        },
        {
            id: 'overall2',
            name: 'overall 2',
            pic: '/overall-2.webp',
            price: '1.3',
            category: 'overalls'
        },
        {
            id: 'overall3',
            name: 'overall 3',
            pic: '/overall-3.jpg',
            price: '1.1',
            category: 'overalls'
        },
        {
            id: 'overall4',
            name: 'overall 4',
            pic: '/overall-4.webp',
            price: '1',
            category: 'overalls'
        },
        {
            id: 'overall5',
            name: 'overall 5',
            pic: '/overall-5.jpg',
            price: '1.1',
            category: 'overalls'
        },
        {
            id: 'overall6',
            name: 'overall 6',
            pic: '/overall-6.jpg',
            price: '2',
            category: 'overalls'
        },
    ],
    socks: [
        {
            id: 'socks1',
            name: 'sock 1',
            pic: '/socks-1.jpg',
            price: '1.5',
            category: 'socks'
        },
        {
            id: 'socks2',
            name: 'sock 2',
            pic: '/socks-2.jpg',
            price: '1.1',
            category: 'socks'
        },
        {
            id: 'socks3',
            name: 'sock 3',
            pic: '/socks-3.jpg',
            price: '0.8',
            category: 'socks'
        },
        {
            id: 'socks4',
            name: 'sock 4',
            pic: '/socks-4.png',
            price: '1',
            category: 'socks'
        },
        {
            id: 'socks5',
            name: 'sock 5',
            pic: '/socks-5.jpg',
            price: '1.2',
            category: 'socks'
        },
        {
            id: 'socks6',
            name: 'sock 6',
            pic: '/socks-6.jpg',
            price: '1.2',
            category: 'socks'
        },
    ],
    hats: [
        {
            id: 'hats1',
            name: 'hat 1',
            pic: '/hats-1.jpg',
            price: '1.5',
            category: 'hats'
        },
        {
            id: 'hats2',
            name: 'hat 2',
            pic: '/hats-2.jpg',
            price: '1.5',
            category: 'hats'
        },
        {
            id: 'hats3',
            name: 'hat 3',
            pic: '/hats-3.jpg',
            price: '1.5',
            category: 'hats'
        },
        {
            id: 'hats4',
            name: 'hat 4',
            pic: '/hats-4.jpg',
            price: '1.5',
            category: 'hats'
        },
        {
            id: 'hats5',
            name: 'hat 5',
            pic: '/hats-5.jpg',
            price: '1.5',
            category: 'hats'
        },
        {
            id: 'hats6',
            name: 'hat 6',
            pic: '/hats-6.jpg',
            price: '1.5',
            category: 'hats'
        },
    ],
    dogs: [
        {
            id: 'dogs1',
            name: 'dog 1',
            pic: '/dogs-1.jpg',
            price: '1.5',
            category: 'dogs'
        },
        {
            id: 'dogs2',
            name: 'dog 2',
            pic: '/dogs-2.jpg',
            price: '1.5',
            category: 'dogs'
        },
        {
            id: 'dogs3',
            name: 'dog 3',
            pic: '/dogs-3.jpg',
            price: '1.5',
            category: 'dogs'
        },
        {
            id: 'dogs4',
            name: 'dog 4',
            pic: '/dogs-4.jpg',
            price: '1.5',
            category: 'dogs'
        },
        {
            id: 'dogs5',
            name: 'dog 5',
            pic: '/dogs-5.jpg',
            price: '1.5',
            category: 'dogs'
        },
        {
            id: 'dogs6',
            name: 'dog 6',
            pic: '/dogs-6.jpg',
            price: '1.5',
            category: 'dogs'
        },
    ],
    cats: [
        {
            id: 'cats1',
            name: 'cat 1',
            pic: '/cats1-1.jpg',
            price: '1.5',
            category: 'cats'
        },
        {
            id: 'cats2',
            name: 'cat 2',
            pic: '/cats-2.jpg',
            price: '1.5',
            category: 'cats'
        },
        {
            id: 'cats3',
            name: 'cat 3',
            pic: '/cats-3.jpg',
            price: '1.5',
            category: 'cats'
        },
        {
            id: 'cats4',
            name: 'cat 4',
            pic: '/cats-4.jpg',
            price: '1.5',
            category: 'cats'
        },
        {
            id: 'cats5',
            name: 'cat 5',
            pic: '/cats-5.jpg',
            price: '1.5',
            category: 'cats'
        },
        {
            id: 'cats6',
            name: 'cat 6',
            pic: '/cats-6.jpg',
            price: '1.5',
            category: 'cats'
        },
    ],
    err: null,
    isFetching: false,
}

const categoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case categoriesActionTypes.CATEGORIEST_FETCH_START:
            return {...state, isFetching: true};
        case categoriesActionTypes.CATEGORIEST_FETCH_SUCCESS:
            return {...state, ...action.payload.data};
        case categoriesActionTypes.CATEGORIEST_FETCH_FAILURE:
            return {...state, err: action.payload.err};
        default:
            return state;
    }
}

export default categoriesReducer;