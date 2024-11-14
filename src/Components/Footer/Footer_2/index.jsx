import logo from "../../../assets/images/logo.png";

// SEPARATOR
import { Separator } from "../../ui/separator";

// FOOTER LINK IMPORT
import { company, help } from "@/constants";

// IMPORT SOCIAL ICONS
// SOCIAL ICONS
// import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer2() {
  return (
    <div className="bg-bgShade py-10">
      <div className="space-y-12 max-w-screen-2xl mx-auto max-2xl:px-10">
        <div className="grid grid-cols-6 gap-6 items-center justify-center">
          <div className="col-span-2 max-md:col-span-6">
            <img src={logo} alt="Logo" className="w-1/2" />
          </div>
          {/* COMPANY */}
          <div className="  space-y-4 col-span-3 max-md:col-span-6 w-full">
            <h1 className="font-bold text-sm uppercase font-footerFont">
              Company
            </h1>
            <ul className="space-y-2 max-md:col-span-6 col-span-1 w-full">
              {company?.map((eachLink, index) => (
                <li className="text-xs" key={index}>
                  <a href={eachLink?.href} className="font-footerFont">
                    {eachLink?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* HELP */}
          <div className="  space-y-4">
            <h1 className="font-bold text-sm uppercase font-footerFont">
              Help
            </h1>
            <ul className="space-y-2">
              {help?.map((eachLink, index) => (
                <li className="text-xs" key={index}>
                  <a href={eachLink?.href} className="font-footerFont">
                    {eachLink?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* SEPARATOR */}
        <Separator />
        <div className="flex items-center max-md:flex-col max-md:gap-4 justify-between ">
          <div>
            <span className="text-slate-400 text-xs font-footerFont">
              © Copyright 2024, All Rights Reserved
            </span>
          </div>
          {/* <ul className="flex items-center gap-5">
            <li>
              <a href="#" className="group">
                <FaTwitter size={24} className="group-hover:scale-110" />
              </a>
            </li>
            <li>
              <a href="#" className="group">
                <FaYoutube size={24} className="group-hover:scale-110" />
              </a>
            </li>
            <li>
              <a href="#" className="group">
                <FaInstagram size={24} className="group-hover:scale-110" />
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}
