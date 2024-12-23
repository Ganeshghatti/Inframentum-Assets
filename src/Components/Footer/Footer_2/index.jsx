import { FaLinkedin } from "react-icons/fa6";
import logo from "../../../assets/images/logo.png";

// SEPARATOR
import { Separator } from "../../ui/separator";

// FOOTER LINK IMPORT
import { company, help } from "@/constants";

// IMPORT SOCIAL ICONS
// SOCIAL ICONS
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer2() {
  return (
    <div className="bg-bgShade py-10 lg:ml-5">
      <div className="space-y-12 max-w-screen-2xl mx-auto max-2xl:px-10">
        <div className="grid grid-cols-12 gap-6">
          {/* Logo */}
          <div className="col-span-3 max-md:col-span-12 lg:ml-6 lg:mt-[-10px]">
            <img src={logo} alt="Logo" className="w-1/2" />
          </div>

          {/* Company Links */}
          <div className="col-span-6 max-md:col-span-12 space-y-4 lg:mt-5">
            <h1 className="font-bold text-sm uppercase font-footerFont lg:text-[18px]">
              Company
            </h1>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 ">
              {company?.map((eachLink, index) => (
                <li className="text-xs lg:text-[14px]" key={index}>
                  <a href={eachLink?.href} className="font-footerFont">
                    {eachLink?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div className="col-span-3 max-md:col-span-12 space-y-4 lg:mt-5">
            <h1 className="font-bold text-sm uppercase font-footerFont lg:text-[18px]">
              Help
            </h1>
            <ul className="space-y-2">
              {help?.map((eachLink, index) => (
                <li className="text-xs lg:text-[14px]" key={index}>
                  <a href={eachLink?.href} className="font-footerFont">
                    {eachLink?.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="pt-4">
              <h1 className="font-bold text-sm uppercase font-footerFont mb-4">
                Follow Us
              </h1>
              <div className="flex items-center gap-4">
                <a
                  href="https://x.com/Inframentum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-400 transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                  {/* Replace with correct class */}
                </a>
                <a
                  href="https://www.linkedin.com/company/inframentum-assets-private-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/inframentum/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex items-center max-md:flex-col max-md:gap-4 lg:ml-6 justify-between">
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
