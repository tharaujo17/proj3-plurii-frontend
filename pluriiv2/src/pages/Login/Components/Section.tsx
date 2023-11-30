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
              <BoxDetail type="text" placeholder='email@exemplo.com'/>
              <CardDetails>Senha</CardDetails>
              <BoxDetail type="password" placeholder='Senha'/>
              <DetailButton href="#">Avançar</DetailButton>
              <DetailButton href="#">Esqueci minha senha</DetailButton>
              <DetailButton href="#">Não tenho conta? Registre-se</DetailButton>
            </CardContainer>
          </LoginContainer>
          <Footer />
        </MainContainer>
      </Container>
    </ContainerMaster>
  );
};

export default Section;
