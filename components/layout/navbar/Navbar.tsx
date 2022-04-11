import Menu from "../../modules/menu/Menu";
import { NavbarContainer } from "./Navbar.styles";
import Link from "next/link";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="wrapper">
        <Link href="/">
          <a className="logo">Weebflix</a>
        </Link>
        <Menu />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
