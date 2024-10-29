/* eslint-disable react/prop-types */
import { navLinks } from "@/utils/navlinks";
import { useLocation } from "react-router-dom";

export default function NavigationLinks({ className, setOpen }) {
  const { pathname } = useLocation();

  const onHandle_MobileSideBar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <ul className={className}>
      {navLinks?.map((eachLink, index) => (
        <li key={index}>
          <a
            href={
              pathname === "/contact" || pathname === "/privacy-policy" || pathname === "/our-partners"
                ? "/"
                : eachLink?.path
            }
            onClick={onHandle_MobileSideBar}
          >
            {eachLink?.pathName}
          </a>
        </li>
      ))}
    </ul>
  );
}
