import {writable} from "svelte/store";

const CART = JSON.parse(localStorage.getItem('noiseless-cart')) || []

const {subscribe, update, set} = writable(CART)

const reset = () => {
    set([])
}

const addToCart = (product) => {
    return update((cart) => {
        let index = cart.findIndex((cartItem) => cartItem.id === product.id)
        if(index !== -1) {
            cart[index].quantity++
        } else {
            product.quantity = 1
            cart = [...cart, product]
        }
        localStorage.setItem('noiseless-cart', JSON.stringify(cart))
        return cart
    })
}

const removeFromCart = (id) => {
    return update((cart) => {
        let index = cart.findIndex((cartItem) => cartItem.id === id)
        let tmp = cart
        tmp.splice(index, 1)
        cart = tmp
        localStorage.setItem('noiseless-cart', JSON.stringify(cart))
        return cart
    })
}
const increaseQuantity = (id) => {
    return update((cart) => {
        let index = cart.findIndex((cartItem) => cartItem.id === id)
        cart[index].quantity++
        localStorage.setItem('noiseless-cart', JSON.stringify(cart))
        return cart
    })
}
const decreaseQuantity = (id) => {
    return update((cart) => {
        let index = cart.findIndex((cartItem) => cartItem.id === id)
        if(cart[index].quantity > 1) cart[index].quantity--
        localStorage.setItem('noiseless-cart', JSON.stringify(cart))
        return cart
    })
}
const isInCart = (id, cart) => {
    let index = cart.findIndex((cartItem) => cartItem.id === id)
    return index !== -1
}
const getTotalQuantity = (cart) => {
    let total = 0
    cart.forEach((item) => {
        total += item.quantity
    })
    return total
}
const getTotalPrice = (cart) => {
    let total = 0
    cart.forEach((item) => {
        total += item.quantity * item.price
    })
    return total
}

export default {
    subscribe,
    reset,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    isInCart,
    getTotalPrice,
    getTotalQuantity
}

