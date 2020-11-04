import {categoriesActionTypes} from './categories.types';

const INITIAL_STATE = {
    overalls: [
        {
            id: 'overall1',
            name: 'overall 1',
            pic: '/categories-images/overalls/overall-1.webp',
            price: '1.5',
            category: 'overalls'
        },
        {
            id: 'overall2',
            name: 'overall 2',
            pic: '/categories-images/overalls/overall-2.webp',
            price: '1.3',
            category: 'overalls'
        },
        {
            id: 'overall3',
            name: 'overall 3',
            pic: '/categories-images/overalls/overall-3.jpg',
            price: '1.1',
            category: 'overalls'
        },
        {
            id: 'overall4',
            name: 'overall 4',
            pic: '/categories-images/overalls/overall-4.webp',
            price: '1',
            category: 'overalls'
        },
        {
            id: 'overall5',
            name: 'overall 5',
            pic: '/categories-images/overalls/overall-5.jpg',
            price: '1.1',
            category: 'overalls'
        },
        {
            id: 'overall6',
            name: 'overall 6',
            pic: '/categories-images/overalls/overall-6.jpg',
            price: '2',
            category: 'overalls'
        },
    ],
    socks: [
        {
            id: 'socks1',
            name: 'sock 1',
            pic: '/categories-images/socks/socks-1.jpg',
            price: '1.5',
            category: 'socks'
        },
        {
            id: 'socks2',
            name: 'sock 2',
            pic: '/categories-images/socks/socks-2.jpg',
            price: '1.1',
            category: 'socks'
        },
        {
            id: 'socks3',
            name: 'sock 3',
            pic: '/categories-images/socks/socks-3.jpg',
            price: '0.8',
            category: 'socks'
        },
        {
            id: 'socks4',
            name: 'sock 4',
            pic: '/categories-images/socks/socks-4.png',
            price: '1',
            category: 'socks'
        },
        {
            id: 'socks5',
            name: 'sock 5',
            pic: '/categories-images/socks/socks-5.jpg',
            price: '1.2',
            category: 'socks'
        },
        {
            id: 'socks6',
            name: 'sock 6',
            pic: '/categories-images/socks/socks-6.jpg',
            price: '1.2',
            category: 'socks'
        },
    ],
    hats: [
        {
            id: 'hats1',
            name: 'hat 1',
            pic: '/categories-images/hats/hats-1.jpg',
            price: '1.5',
            category: 'hats'
        },
        {
            id: 'hats2',
            name: 'hat 2',
            pic: '/categories-images/hats/hats-2.jpg',
            price: '1.5',
            category: 'hats'
        },
        {
            id: 'hats3',
            name: 'hat 3',
            pic: '/categories-images/hats/hats3.jpg',
            price: '1.5',
            category: 'hats'
        },
        {
            id: 'hats4',
            name: 'hat 4',
            pic: '/categories-images/hats/hats-4.jpg',
            price: '1.5',
            category: 'hats'
        },
        {
            id: 'hats5',
            name: 'hat 5',
            pic: '/categories-images/hats/hats-5.jpg',
            price: '1.5',
            category: 'hats'
        },
        {
            id: 'hats6',
            name: 'hat 6',
            pic: '/categories-images/hats/hats-6.jpg',
            price: '1.5',
            category: 'hats'
        },
    ],
    dogs: [
        {
            id: 'dogs1',
            name: 'dog 1',
            pic: '/categories-images/dogs/dogs-1.jpg',
            price: '1.5',
            category: 'dogs'
        },
        {
            id: 'dogs2',
            name: 'dog 2',
            pic: '/categories-images/dogs/dogs-2.jpg',
            price: '1.5',
            category: 'dogs'
        },
        {
            id: 'dogs3',
            name: 'dog 3',
            pic: '/categories-images/dogs/dogs-3.jpg',
            price: '1.5',
            category: 'dogs'
        },
        {
            id: 'dogs4',
            name: 'dog 4',
            pic: '/categories-images/dogs/dogs-4.jpg',
            price: '1.5',
            category: 'dogs'
        },
        {
            id: 'dogs5',
            name: 'dog 5',
            pic: '/categories-images/dogs/dogs-5.jpg',
            price: '1.5',
            category: 'dogs'
        },
        {
            id: 'dogs6',
            name: 'dog 6',
            pic: '/categories-images/dogs/dogs-6.jpg',
            price: '1.5',
            category: 'dogs'
        },
    ],
    cats: [
        {
            id: 'cats1',
            name: 'cat 1',
            pic: '/categories-images/cats/cats-1.jpg',
            price: '1.5',
            category: 'cats'
        },
        {
            id: 'cats2',
            name: 'cat 2',
            pic: '/categories-images/cats/cats-2.jpg',
            price: '1.5',
            category: 'cats'
        },
        {
            id: 'cats3',
            name: 'cat 3',
            pic: '/categories-images/cats/cats-3.jpg',
            price: '1.5',
            category: 'cats'
        },
        {
            id: 'cats4',
            name: 'cat 4',
            pic: '/categories-images/cats/cats-4.jpg',
            price: '1.5',
            category: 'cats'
        },
        {
            id: 'cats5',
            name: 'cat 5',
            pic: '/categories-images/cats/cats-5.jpg',
            price: '1.5',
            category: 'cats'
        },
        {
            id: 'cats6',
            name: 'cat 6',
            pic: '/categories-images/cats/cats-6.jpg',
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