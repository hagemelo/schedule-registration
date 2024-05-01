import FooterStyles from './footer.styles';

const Footer = () => {

    const { FooterStyle } =  FooterStyles;


    return (
        <div>
            <FooterStyle>
                <p>This is a simple footer</p>
                <p>&copy; 2024 My Website</p>
            </FooterStyle>

     </div>
  );
};

export default Footer;