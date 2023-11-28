import React from 'react';

import {
  FooterContainer,
  LogoSection,
  NavSection,
  ContactSection,
  DoubtsSection,
  FooterText,
  NavItem,
  SocialIcons,
  SectionTitle,
  LogoWithGaragino
} from './styled';

import LogoPluriiGaragino from '../../../assets/logo-with-garagino.svg'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LogoSection>
        <LogoWithGaragino src={LogoPluriiGaragino}/>
        <FooterText>A solução é concebida e desenvolvida por estudantes da Cesar School com o propósito de aplicá-la de forma pioneira em sua própria instituição. </FooterText>
        <FooterText>Allright reserved - PLURII</FooterText>
      </LogoSection>
      <NavSection>
        <SectionTitle>HOME</SectionTitle>
        <NavItem href='#'>Salas</NavItem>
        <NavItem href='#'>Reservas</NavItem>
        <NavItem href='#'>Laboratório Garagem</NavItem>
      </NavSection>
      <ContactSection>
        <SectionTitle>CONTATE-NOS</SectionTitle>
        <FooterText>CESAR School</FooterText>
        <FooterText>contato@plurii.com</FooterText>
      </ContactSection>
      <DoubtsSection>
        <SectionTitle>DÚVIDAS</SectionTitle>
        <FooterText>Perguntas ou feedbacks? <br /> Adoraríamos ouvir você</FooterText>
        <SocialIcons>
        </SocialIcons>
      </DoubtsSection>
    </FooterContainer>
  );
};

export default Footer;