import {writable} from "svelte/store";

const PRODUCTS = [
    {
        id: 'Sony',
        brand: 'Sony',
        model: 'WH-1000MX4',
        price: 400,
        img: './images/products/sony.png'
    },
    {
        id: 'Shure',
        brand: 'Shure',
        model: 'AONIC 50',
        price: 450,
        img: './images/products/shure.png'
    },
    {
        id: 'Sennheiser',
        brand: 'Sennheiser',
        model: 'Momentum 3',
        price: 380,
        img: './images/products/sennheiser.png'
    },
    {
        id: 'Bose',
        brand: 'Bose',
        model: 'Noise Cancelling 700',
        price: 470,
        img: './images/products/bose.png'
    },
    {
        id: 'Apple',
        brand: 'Apple',
        model: 'Air Pods Max',
        price: 650,
        img: './images/products/apple.png'
    }
]

const {subscribe} = writable(PRODUCTS)

export default {
    subscribe
}





