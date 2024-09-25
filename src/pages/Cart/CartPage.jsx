import { useTitle } from "../../hooks/useTitle";
import { CartEmpty, CartList } from "./components/index";
import { useCart } from "../../context";

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`);

  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};
