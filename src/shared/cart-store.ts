import { atom } from "nanostores";
import type { CartItem } from "../types";

export const $cart = atom<CartItem[]>([]);

export function setCart(cart: CartItem[]) {
  $cart.set(cart);
}
