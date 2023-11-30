import React from 'react';
import Header from '../../Shared/Components/HeaderUserLogged/HeaderUserLogged';
import { ContainerMaster, Content, Description, Title, GarageImage, SelectDate } from './Components/Scheduling';
import schedulingGarageImage from '../../assets/schedulingGarageImage.svg';
import SchedulingDate from './Components/SchedulingDate';
import SchedulingForm from './Components/SchedulingForm';
// import { Container } from './styles';

const Scheduling: React.FC = () => {
  return (
    <ContainerMaster>
      <Header />
      <Content>
      <Title>
        Laboratório <br /> Garagem 2
      </Title>
      <Description>
        Bem-vindo ao Laboratório Garagem 2, um espaço que transcende as
        fronteiras da criatividade e inovação! Aqui, você encontrará uma sala
        equipada com ferramentas de última geração e um ambiente propício para
        dar vida aos seus projetos mais ambiciosos. Oferecemos um local vibrante
        onde a experimentação é incentivada e a colaboração é o combustível para
        o sucesso.
      </Description>
      </Content>
      <GarageImage src={schedulingGarageImage} />
      <SelectDate>Selecione uma data</SelectDate>
      <SchedulingDate />
      <SchedulingForm />
    </ContainerMaster>
  );
};

export default Scheduling;
