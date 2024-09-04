import logo from "../../../assets/images/logo.png";

// SEPARATOR
import { Separator } from "@/components/ui/separator";

// FOOTER LINK IMPORT
import { company, help, resources } from "@/constants";

// IMPORT SOCIAL ICONS
// SOCIAL ICONS
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer2() {
  return (
    <div className="bg-background_Color_1 py-10">
      <div className="space-y-12 max-w-screen-2xl mx-auto max-2xl:px-10">
        <div>
          <img src={logo} alt="Logo" className="w-44" />
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5">
          {/* COMPANY */}
          <div className="col-span-1  space-y-4">
            <h1 className="font-bold text-sm uppercase font-footerFont">
              Company
            </h1>
            <ul className="space-y-2 ">
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
          <div className="col-span-1  space-y-4">
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
          {/* RESOURCE */}
          <div className="col-span-1  space-y-4 max-md:pt-12">
            <h1 className="font-bold text-sm uppercase">Resources</h1>
            <ul className="space-y-2">
              {resources?.map((eachLink, index) => (
                <li className="text-xs" key={index}>
                  <a href={eachLink?.href} className="font-footerFont">
                    {eachLink?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* NEWS LETTER */}
          <div className="col-span-2  space-y-4 max-lg:pt-12">
            <h1 className="font-bold text-sm uppercase font-footerFont">
              Subscribe to newsletter
            </h1>
            <div>
              <div className="flex border 2xl:w-3/4 max-xl:w-full  rounded-lg font-footerFont">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="bg-transparent placeholder:text-xs placeholder:text-slate-400 px-2 w-full placeholder:font-footerFont outline-none focus-within:shadow-2xl"
                />
                <button className="bg-secondaryColor hover:bg-secondaryColor_hover transition duration-300 hover:shadow-md text-white text-base px-8 py-2 rounded-r-lg font-footerFont">
                  Join
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-10 2xl:w-3/4 max-xl:w-full">
              <div className="flex flex-col items-start gap-2 ">
                <span className="text-xs font-bold text-slate-400 uppercase font-footerFont">
                  Call us
                </span>
                <span className="font-bold text-slate-900 font-footerFont">
                  (+1) 456-4933
                </span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase font-footerFont">
                  Email us
                </span>
                <span className="font-bold text-slate-900 font-footerFont">
                  mail@example.com
                </span>
              </div>
            </div>
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
          <ul className="flex items-center gap-5">
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
          </ul>
        </div>
      </div>
    </div>
  );
}
