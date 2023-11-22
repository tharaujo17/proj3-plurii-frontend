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
} from './styled';
import SubTitleImage from '../../../assets/subtitleDecoration.svg';

const Section: React.FC = () => {
  return (
    <Container>
      <Title>Bem vindo ao Plurii</Title>
      <SubTitle>
        Laboratório <br /> garagem
      </SubTitle>
        <SubTitleDecoration src={SubTitleImage} />
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo. <br />
      </Description>
      <Actions>
        <AboutUsBtn href="#">Sobre nós</AboutUsBtn>
        <ReserveBtn href="#">Reserve</ReserveBtn>
      </Actions>
    </Container>
  );
};

export default Section;
