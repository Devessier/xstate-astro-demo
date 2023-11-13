import { atom } from 'nanostores';
import type { CartItem } from '../types';

export const $cart = atom<CartItem[]>([])

export const $cartAnimation = atom<{
    isAnimating: boolean,
    timerId: ReturnType<typeof setTimeout> | undefined
}>({
    isAnimating: false,
    timerId: undefined
});

export function setCart(cart: CartItem[]) {
    $cart.set(cart);

    const cartAnimationState = $cartAnimation.get()
    clearTimeout(cartAnimationState.timerId);

    const timerId = setTimeout(() => {
        $cartAnimation.set({
            isAnimating: false,
            timerId: undefined,
        });
    }, 2_000);
    $cartAnimation.set({
        isAnimating: true,
        timerId,
    });
}
