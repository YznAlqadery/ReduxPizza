import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartQuantity, getCartTotal } from "./cartSlice";
import { formatCurrency } from "../../utilities/helpers";

function CartOverview() {
  //Get the cart quantity from the store
  const cartQuantity = useSelector(getCartQuantity);
  const cartTotal = useSelector(getCartTotal);

  if (cartQuantity === 0) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{cartQuantity} pizzas</span>
        <span>{formatCurrency(cartTotal)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
