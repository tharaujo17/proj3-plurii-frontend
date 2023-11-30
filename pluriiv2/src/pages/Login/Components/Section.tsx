import React from 'react';
import ImageLogo from '../../../assets/logo.svg';

import Header from '../../../Shared/Components/Header/Header';
import Footer from '../../../Shared/Components/Footer/Footer';

import {
  Container,
  MainContainer,
  CardLogo,
  CardContainer, 
  CardContainerLogo,
  CardDetails, 
  CardTitle,
  LoginContainer, 
  DetailButton,
  BoxDetail,
  ContainerMaster,
} from '../Components/Login';

const Section: React.FC = () => {
  return (
    <ContainerMaster>
      <Header />
      <Container>
        <MainContainer>
          <LoginContainer>
            <CardContainerLogo>
              <CardLogo src={ImageLogo} />
            </CardContainerLogo>

            <CardContainer>
              <CardTitle>Seja bem-vindo ao Garagem!</CardTitle>
              <CardDetails>E-mail</CardDetails>
              <BoxDetail type="text" />
              <CardDetails>Senha</CardDetails>
              <BoxDetail type="password" />
              <DetailButton href="#">Avançar</DetailButton>
            </CardContainer>
          </LoginContainer>
          <Footer />
        </MainContainer>
      </Container>
    </ContainerMaster>
  );
};

export default Section;
