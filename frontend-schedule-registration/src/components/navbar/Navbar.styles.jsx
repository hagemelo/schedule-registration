import styled from 'styled-components';


const NavbarStyle = styled.nav`
  background-color: #9fd3c7;
  padding: 5px 25px;
  top: 0,
  left: 0,
  width: 100%,
`;

const NavbarListStyle = styled.ul`
    font-family: 'Inter';
    font-size: '14px';
    font-color: '#111B2F';
    fontWeight: 700;
    line-height: '24px';
    list-style-type: 'none';
    margin: 0;
    padding: 0;
    display: 'flex';
    gap: '4px',
`;

const navbarStyles = {
  NavbarStyle, 
  NavbarListStyle
};

export default navbarStyles;