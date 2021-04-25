import {writable} from "svelte/store";

const BRANDS = [
    {
        id: 'Sony',
        brand: 'Sony',
        img: './images/brands/sony.png'
    },
    {
        id: 'Shure',
        brand: 'Shure',
        img: './images/brands/shure.png'
    },
    {
        id: 'Sennheiser',
        brand: 'Sennheiser',
        img: './images/brands/sennheiser.png'
    },
    {
        id: 'Bose',
        brand: 'Bose',
        img: './images/brands/bose.png'
    },
    {
        id: 'Apple',
        brand: 'Apple',
        img: './images/brands/apple.png'
    }
]

const {subscribe} = writable(BRANDS)

export default {
    subscribe
}





