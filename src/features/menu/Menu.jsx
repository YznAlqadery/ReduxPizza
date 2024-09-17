import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  const menuData = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menuData.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loaderMenu() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
