import React from 'react';
import HomeStyles from './home.styles';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';

const Home = () => {

    const { CentralDiv, HomerContainer } = HomeStyles


    return (
        <div>
            <Navbar></Navbar>
            <HomerContainer >
                <CentralDiv>
                    <h1>Pagina Home</h1>
                </CentralDiv>
            </HomerContainer>
            <Footer></Footer>
        </div>
    )
}

export default Home;