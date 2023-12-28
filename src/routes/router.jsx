import Cart from "@/pages/cart";
import ConfirmPayment from "@/pages/confirm-payment/index";
import Login from "@/pages/login";
import Transaction from "@/pages/transaction";
import ProductDetail from "@/pages/product-detail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "@/pages/dashboard";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
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
      path: "/cart/transaction",
      element: <Transaction />,
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
