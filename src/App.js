import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./components/HomePage/Home";
import Shop from "./components/ShopPage/Shop";
import Detail from "./components/DetailPage/Detail";
import Cart from "./components/CartPage/Cart";
import Checkout from "./components/CheckoutPage/Checkout";
import Login from "./components/LoginPage/Login";
import Register from "./components/RegisterPage/Register";
import { loader as productLoader } from "./hooks/use-fetchproduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: productLoader,
        },
        {
          path: "/shop",
          element: <Shop />,
          loader: productLoader,
        },
        {
          path: "/detail/:id",
          element: <Detail />,
          loader: productLoader,
        },
        {
          path: "/cart",
          element: <Cart />,
          loader: productLoader,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
