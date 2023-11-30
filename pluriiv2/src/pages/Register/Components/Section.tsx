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
} from '../Components/Register'; 

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
              <CardTitle>Cadastre-se</CardTitle>
              <CardDetails>Nome</CardDetails>
              <BoxDetail type="text" placeholder='Nome Completo'/>
              <CardDetails>Matrícula</CardDetails>
              <BoxDetail type="text" placeholder='Matrícula'/>
              <CardDetails>E-mail</CardDetails>
              <BoxDetail type="email" placeholder='email@exemplo.com'/>
              <CardDetails>Senha</CardDetails>
              <BoxDetail type="password" placeholder='Senha'/>
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
