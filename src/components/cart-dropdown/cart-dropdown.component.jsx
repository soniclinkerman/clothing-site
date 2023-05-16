import { useContext } from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => navigate("/checkout");
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
