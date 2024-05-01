import styled from 'styled-components';

const HomerContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #385170;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


const CentralDiv = styled.div`
    width: 750px;
    height: 690px;
    margin: 0 auto;
    background: #ececec;
`;

const Tittle = styled.h2`
    text-align: center;
`;

const HomeStyles = {
    HomerContainer,
    CentralDiv,
    Tittle
}

export default HomeStyles;