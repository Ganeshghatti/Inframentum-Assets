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
        <div className="grid grid-cols-12 gap-6">
          {/* Logo */}
          <div className="col-span-3 max-md:col-span-12">
            <img src={logo} alt="Logo" className="w-1/2" />
          </div>
          
          {/* Company Links */}
          <div className="col-span-6 max-md:col-span-12 space-y-4">
            <h1 className="font-bold text-sm uppercase font-footerFont">
              Company
            </h1>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {company?.map((eachLink, index) => (
                <li className="text-xs" key={index}>
                  <a href={eachLink?.href} className="font-footerFont">
                    {eachLink?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div className="col-span-3 max-md:col-span-12 space-y-4">
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

        <Separator />
        
        <div className="flex items-center max-md:flex-col max-md:gap-4 justify-between">
          <div>
            <span className="text-slate-400 text-xs font-footerFont">
              © Copyright 2024, All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
