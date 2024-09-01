import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="h-[700vh]">
        <Outlet />
      </div>
    </>
  );
}
