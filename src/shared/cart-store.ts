import { atom, map } from "nanostores";
import type { CartItem } from "../types";

export const $cart = atom<CartItem[]>([]);

export const $cartAnimation = map<{
  isAnimating: boolean;
  timerId: number;
}>({ isAnimating: false, timerId: 0 });

export function setCart(cart: CartItem[]) {
  $cart.set(cart);

  const animation = $cartAnimation.get()
  clearTimeout(animation.timerId);

  const timerId = setTimeout(() => {
    $cartAnimation.set({
      isAnimating: false,
      timerId: 0,
    });
  }, 2_000);

  $cartAnimation.set({
    isAnimating: true,
    timerId,
  });
}
