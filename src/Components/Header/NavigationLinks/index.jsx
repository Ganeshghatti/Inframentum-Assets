/* eslint-disable react/prop-types */
import { navLinks } from "@/utils/navlinks";
import { Link, useLocation } from "react-router-dom";

export default function NavigationLinks({ className, setOpen }) {
  const { pathname } = useLocation();

  const onHandle_MobileSideBar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <ul className={className}>
      {navLinks?.map((eachLink, index) => (
        <li key={index}>
          <Link
            to={eachLink?.path}
            onClick={onHandle_MobileSideBar}
            className={`${
              pathname === eachLink?.path ? "text-secondaryColor" : ""
            }`}
          >
            {eachLink?.pathName}
          </Link>
        </li>
      ))}
    </ul>
  );
}
