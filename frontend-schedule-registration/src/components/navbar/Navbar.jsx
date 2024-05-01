import NavbarStyles from "./Navbar.styles";
import armedForces from '../../assets/armed-forces.svg'

const Navbar = () => {

    const { NavbarStyle, NavbarListStyle } =  NavbarStyles;


    return (
        <div>
            <NavbarStyle>
                <NavbarListStyle>
                <img src={armedForces} alt="Logo" className="navbar-logo" />

                </NavbarListStyle>


            </NavbarStyle>

     </div>
  );
};

export default Navbar;