import { atom } from 'nanostores';
import type { CartItem } from '../types';

export const $cart = atom<CartItem[]>([]);

export const $cartAnimation = atom<boolean>(false);

export function setCart(cart: CartItem[]) {
    $cart.set(cart);

    $cartAnimation.set(true);
    setTimeout(() => {
        $cartAnimation.set(false);
    }, 2_000);
}
