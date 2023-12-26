import Cart from "@/pages/cart";
import ConfirmPayment from "@/pages/confirm-payment/index";
import Login from "@/pages/login";
import ProductDetail from "@/pages/product-detail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/product/:id",
      element: <ProductDetail />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/confirm-payment",
      element: <ConfirmPayment />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
