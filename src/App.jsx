import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loaderMenu } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, { createOrderAction } from "./features/order/CreateOrder";
import Order, { loaderOrder } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

// This is a simple example of how to use the createBrowserRouter function.
const router = createBrowserRouter([
  {
    //The AppLayout component will be rendered for all routes,
    // layout routes are used to define the layout of the app
    element: <AppLayout />,
    //The Error component will be rendered if there is an error
    errorElement: <Error />,
    //Chuldren routes are used to define the routes of the app inside the applayout
    children: [
      //Route for viewing the home page
      {
        path: "/",
        element: <Home />,
      },
      //Route for viewing the menu
      {
        path: "/menu",
        element: <Menu />,
        //The loaderMenu function will be called before rendering the Menu component
        loader: loaderMenu,
        //Placing the error component here cause its fetching data so it might fail
        errorElement: <Error />,
      },
      //Route for viewing the cart
      {
        path: "/cart",
        element: <Cart />,
      },
      //Route for creating a new order
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      //Route for viewing an order
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: loaderOrder,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
