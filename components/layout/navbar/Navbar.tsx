import Menu from "../../modules/menu/Menu";
import { NavbarContainer } from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="wrapper">
        <h1 className="logo">Weebflix</h1>
        <Menu />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
