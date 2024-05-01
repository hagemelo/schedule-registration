import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeStyles from './home.styles';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import AgendaSelecionadaForm from '../../components/agendaSelecionadaForm/agendaSelecionadaForm'


const Home = () => {

    const { t } = useTranslation();
    const { CentralDiv, HomerContainer, Tittle } = HomeStyles


    return (
        <div>
            <Navbar></Navbar>
            <HomerContainer >
                <CentralDiv>
                    <Tittle>{t("tittle_form_home")}</Tittle>
                    <AgendaSelecionadaForm></AgendaSelecionadaForm>
                </CentralDiv>
            </HomerContainer>
            <Footer></Footer>
        </div>
    )
}

export default Home;