import React from 'react';
import { CardContainer, CardDetails, CardImage, CardTitle, Container, Section2Description, Section2Title } from './styled';
import ImageG1 from '../../../assets/image1.svg';
import ImageG2 from '../../../assets/image2.svg';

const Section2: React.FC = () => {
  return (
    <Container>
      <Section2Title>ESPAÇOS</Section2Title>
      <Section2Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo. <br /> Sed ut
        perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
      </Section2Description>

      <CardContainer>
        <CardImage src={ImageG1} />
        <CardTitle>GARAGEM 1</CardTitle>
        <CardDetails>Projetor</CardDetails>
        <CardDetails>Microfone</CardDetails>
        <CardDetails>Capacidade para 32 pessoas</CardDetails>
      </CardContainer>

      <CardContainer>
        <CardImage src={ImageG2} />
        <CardTitle>GARAGEM 2</CardTitle>
        <CardDetails>Impressora 3D</CardDetails>
        <CardDetails>Working Time Call</CardDetails>
        <CardDetails>Come to Place</CardDetails>
      </CardContainer>
    </Container>
  );
}

export default Section2;
