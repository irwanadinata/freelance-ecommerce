import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "@/pages/login";

export default function Router() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
