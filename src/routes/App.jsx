import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "@/pages/login";
import Footer4 from "@/components/footer-4";

export default function Router() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "footer",
      element: <Footer4/>
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
