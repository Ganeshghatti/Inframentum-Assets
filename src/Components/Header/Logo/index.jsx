import logo from "../../../assets/images/logo.png";

export default function Logo() {
  return (
    <a href="/">
      <img src={logo} alt="INFRAMENTUM" className="w-44 md:w-48" />
    </a>
  );
}
