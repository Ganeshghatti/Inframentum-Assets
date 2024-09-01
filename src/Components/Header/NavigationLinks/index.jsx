/* eslint-disable react/prop-types */
import { navLinks } from "@/utils/navlinks";

export default function NavigationLinks({ className }) {
  return (
    <ul className={className}>
      {navLinks?.map((eachLink, index) => (
        <li key={index}>
          <a href={eachLink?.path}>{eachLink?.pathName}</a>
        </li>
      ))}
    </ul>
  );
}
