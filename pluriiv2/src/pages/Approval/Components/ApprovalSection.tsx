import React from 'react';
import {
  ContainerMaster,
  Container,
  Content,
  Title,
  Description,
  Image,

} from '../Components/Approval';

import SupervisorPic from '../../../assets/approval-supervisor-pic.png';

import ApprovalSection2 from './ApprovalSection2';

// import { Container } from './styles';

const ApprovalSection: React.FC = () => {
  return (
    <ContainerMaster>
    <Container>
      <Content>
        <Title>Área do supervisor</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Description>
      </Content>
      <Image src= {SupervisorPic}/>
    </Container>
    <ApprovalSection2 />

    </ContainerMaster>

  );
};

export default ApprovalSection;
