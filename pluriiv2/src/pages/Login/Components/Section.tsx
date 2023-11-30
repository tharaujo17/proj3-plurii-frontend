import React from 'react';
import ImageLogo from '../../../assets/logo.svg';
import MenuIcon from '../../../assets/Menu_icon.svg';
import Plurii from '../../../assets/logo-header.svg';

import { Footer } from '../../../Shared/Components/Footer/Footer';
import { Header } from '../../../Shared/Components/Header/Header';


import {
  Container,
  MainContainer,
  CardLogo,
  CardContainer, 
  CardContainerLogo,
  CardDetails, 
  CardTitle, 
  CardSubTitle,
  LoginContainer, 
  DetailButton,
  BoxDetail,
  HeaderContainer,
} from '../Components/Login';

const Section: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <MainContainer>
        <LoginContainer>
          <CardContainerLogo>
            <CardLogo src={ImageLogo} />
          </CardContainerLogo>

          <CardContainer>
            <CardTitle>Entrar como Aluno</CardTitle>
            <CardSubTitle>Seja bem-vindo ao Garagem</CardSubTitle>
            <CardDetails>E-mail</CardDetails>
            <BoxDetail> </BoxDetail>
            <CardDetails>Senha</CardDetails>
            <BoxDetail></BoxDetail>
            <DetailButton href="#">Avançar</DetailButton>
          </CardContainer>

        </LoginContainer>
        <Footer />

      </MainContainer>


   </Container>
  );
};

export default Section;
