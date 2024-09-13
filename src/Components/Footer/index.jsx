import { useLocation } from "react-router-dom";
import Footer1 from "./Footer_1";
import Footer2 from "./Footer_2";

export default function Footer() {
  const { pathname } = useLocation();
  return (
    <div className={`${pathname === "/contact" ? "" : "mt-20"}`}>
      {pathname !== "/contact" && <Footer1 />}
      <Footer2 />
    </div>
  );
}
