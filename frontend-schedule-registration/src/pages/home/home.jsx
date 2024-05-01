import React from 'react';
import HomeStyles from './home.styles';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import { useTranslation } from "react-i18next";

const Home = () => {

    const { t } = useTranslation();
    const { CentralDiv, HomerContainer, Tittle } = HomeStyles


    return (
        <div>
            <Navbar></Navbar>
            <HomerContainer >
                <CentralDiv>
                    <Tittle>{t("tittle_form_home")}</Tittle>
                </CentralDiv>
            </HomerContainer>
            <Footer></Footer>
        </div>
    )
}

export default Home;