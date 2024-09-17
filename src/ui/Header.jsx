import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-stone-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="text-sm tracking-widest text-stone-50">
        Redux&apos;s Pizza
      </Link>
      <SearchOrder />

      <Username />
    </header>
  );
}
