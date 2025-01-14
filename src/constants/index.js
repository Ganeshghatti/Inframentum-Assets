// HOME SLIDER IMAGES
import img_1 from "../assets/images/image-1.jpg";
import img_2 from "../assets/images/image-2.jpg";
import img_3 from "../assets/images/image-3.jpg";

// PARTNERS IMAGES

import billionTech from "../assets/images/partners-2.png";
import gladMinds from "../assets/images/partners-1.png";
import ecovate from "../assets/images/partners-3.png";
import syne from "../assets/images/partners-4.png";
import fainfra from "../assets/images/fainfra.png";

// TEAM IMAGES

import team_1 from "../assets/images/team-img_1.png";
import team_2 from "../assets/images/team-img_2.png";
import team_3 from "../assets/images/team-img_3.png";

// HOME SLIDER
const homeSlider_Images = [
  {
    src: img_1,
    alt: "INFRAMENTUM",
  },
  {
    src: img_2,
    alt: "INFRAMENTUM",
  },
  {
    src: img_3,
    alt: "INFRAMENTUM",
  },
];

// PARTNERS
const partnersImages = [
  {
    src: syne,
    alt: "Syne",
    link: "/our-partners",
  },
  {
    src: billionTech,
    alt: "BillionTech",
    link: "/our-partners",
  },
  {
    src: gladMinds,
    alt: "GladMinds",
    link: "/our-partners",
  },
  {
    src: ecovate,
    alt: "EcoVate",
    link: "/our-partners",
  },
  {
    src: fainfra,
    alt: "Fa-infra",
    link: "/our-partners",
    class: "w-[150px] h-[auto]",
  },
];

// Our_Value_Proposition
const propositionText = [
  {
    text: "Solar and Wind Power based Assets",
  },
  {
    text: "Clean Energy Drinking Water Assets",
  },
  {
    text: "Operating Lease Rental of Electric Construction and Material Handling Equipments",
  },
  {
    text: "We enable our Platform users to address",
  },
  {
    text: "Consumption of Lower Levelised Cost of Energy through Through Green energy while Investing, Managing or Trading in Renewable Energy",
  },
  {
    text: "We also assist in acquiring clean energy assets efficiently while Optimizing power usage through our lease and rental platform",
  },
];

// OUR TEAM
const teamImages = [
  {
    src: team_1,
    alt: "Ramakrishnan Venkateswaran",
    name: "Ramakrishnan Venkateswaran",
    designation: "Founder and CEO",
  },
  {
    src: team_3,
    alt: "Ananth lyer",
    name: "Ananth lyer",
    designation: "Co-Founder and Director",
  },
  {
    src: team_2,
    alt: "Tirumalai Velu",
    name: "Tirumalai Velu",
    designation: "Co-Founder and Director",
  },
];

//FOOTER LINKS
const company = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about-us",
    name: "About",
  },
  {
    href: "/I_RE_ALCM_Services",
    name: "I-Re-Alcm",
  },
  {
    href: "/I_RENTAL_Services",
    name: "I-Rental First",
  },
  {
    href: "/I_RE_FIN_Services",
    name: "I-Re-Fin",
  },
  {
    href: "/calculator",
    name: "Solar Feasibility Calculator",
  },
  {
    href: "/contact",
    name: "Contact Us",
  },
];

const help = [
  {
    href: "/privacy-policy",
    name: "Privacy Policy",
  },
];

const resources = [
  {
    href: "#",
    name: "Free eBooks",
  },
  {
    href: "#",
    name: "Development Tutorial",
  },
  {
    href: "#",
    name: "How to - Blog",
  },
  {
    href: "#",
    name: "Youtube Playlist",
  },
];

const form_Drop_Options = [
  { opt: "Consumer", opt_value: "consumer" },
  { opt: "Financier", opt_value: "financier" },
  { opt: "Investor", opt_value: "investor" },
  { opt: "Landowner", opt_value: "landowner" },
  { opt: "Supplier (Panels)", opt_value: "supplier_panels" },
  { opt: "Supplier (EPC Services)", opt_value: "supplier_epc" },
  { opt: "Supplier (Inverters)", opt_value: "supplier_inverters" },
  { opt: "Supplier (Others)", opt_value: "supplier_others" },
  { opt: "Manufacturer", opt_value: "manufacturer" },
  { opt: "Space Owner", opt_value: "space_owner" },
  { opt: "Warehousing", opt_value: "warehousing" },
  { opt: "Quarry Business", opt_value: "quarry_business" },
  { opt: "Data Centre", opt_value: "data_centre" },
  { opt: "Agri Business", opt_value: "agri_business" },
  { opt: "Cold Storage", opt_value: "cold_storage" },
  { opt: "Others", opt_value: "others" },
];

export {
  partnersImages,
  homeSlider_Images,
  propositionText,
  teamImages,
  company,
  help,
  resources,
  form_Drop_Options,
};
