import React from 'react';
import { CardContainer, CardDetails, CardImage, CardTitle, Section2Description, Section2Title, HomeContainer, ContentContainer, DetailButton, SubTitleDecorationSection2 } from '../Components/Home';
import ImageG1 from '../../../assets/image1.svg';
import ImageG2 from '../../../assets/image2.svg';
import SubTitleImage from '../../../assets/subtitleDecoration.svg';

const Section2: React.FC = () => {
  return (
    <HomeContainer>
    <ContentContainer>
      <Section2Title>ESPAÇOS</Section2Title>
      <SubTitleDecorationSection2 src={SubTitleImage}/>
      <Section2Description>
      Embarque em uma jornada de inovação e descoberta ao explorar nossos espaços exclusivos disponíveis para agendamento. 
      <br /> <br /> Cada ambiente é cuidadosamente projetado para inspirar a criatividade, 
      proporcionando uma atmosfera dinâmica e equipada para elevar seus projetos a novos patamares.
      </Section2Description>
      </ContentContainer>

      <CardContainer>
      <CardImage src={ImageG1} />
      <CardTitle>GARAGEM 1</CardTitle>
      <CardDetails>Projetor</CardDetails>
      <CardDetails>Microfone</CardDetails>
      <CardDetails>Capacidade para 32 pessoas</CardDetails>
      <DetailButton href="#">VER DETALHES</DetailButton>
      </CardContainer>

      <CardContainer>
        <CardImage src={ImageG2} />
        <CardTitle>GARAGEM 2</CardTitle>
        <CardDetails>Impressora 3D</CardDetails>
        <CardDetails>Working Time Call</CardDetails>
        <CardDetails>Come to Place</CardDetails>
        <DetailButton href="#">VER DETALHES</DetailButton>
      </CardContainer>
     
    </HomeContainer>
  );
}

export default Section2;
