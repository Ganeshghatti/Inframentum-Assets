import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import AboutUS from "./pages/about_us";
import ContactUS from "./pages/contact_us";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about_us",
          element: <AboutUS />,
        },
        {
          path: "/contact_us",
          element: <ContactUS />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
