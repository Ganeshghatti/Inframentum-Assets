import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../Components/ScrollToTop";

export default function Layout() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
}
