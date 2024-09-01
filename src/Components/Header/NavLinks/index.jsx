/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../../utils/navlinks";

export default function NavLinks({ className }) {
  const { pathname } = useLocation();

  return (
    <ul className={className}>
      {navLinks?.map((each_Lnk, index) => (
        <li key={index}>
          <Link
            to={each_Lnk?.path}
            className={`${
              pathname === each_Lnk?.path ? "text-slate-950" : "text-slate-600"
            }`}
          >
            {each_Lnk?.pathName}
          </Link>
        </li>
      ))}
    </ul>
  );
}
