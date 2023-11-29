import React from 'react';
import {
  AboutUsBtn,
  Actions,
  Container,
  Description,
  ReserveBtn,
  SubTitle,
  SubTitleDecoration,
  Title,
} from '../Components/Home';
import SubTitleImage from '../../../assets/subtitleDecoration.svg';
import Section2 from './Section2';

const Section: React.FC = () => {
  return (
    <Container>
      <Title>Bem vindo ao Plurii</Title>
      <SubTitle>
        Laboratório <br /> Garagem
      </SubTitle>
      <SubTitleDecoration src={SubTitleImage} />
      <Description>
      Nosso laboratório maker é o catalisador perfeito para explorar sua criatividade e materializar inovações. 
      <br /> Junte-se a nós para uma jornada única de colaboração e descoberta! <br />
      </Description>
      <Actions>
        <AboutUsBtn href="#">Sobre nós</AboutUsBtn>
        <ReserveBtn href="#">Reserve</ReserveBtn>
      </Actions>
      <Section2 />
    </Container>
  );
};

export default Section;
