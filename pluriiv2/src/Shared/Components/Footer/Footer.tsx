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
  SectionTitle
} from './styled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LogoSection>
        <FooterText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </FooterText>
        <FooterText>Allright reserved - PLURII</FooterText>
      </LogoSection>
      <NavSection>
        <SectionTitle>HOME</SectionTitle>
        <NavItem>Salas</NavItem>
        <NavItem>Reservas</NavItem>
        <NavItem>Laboratório Garagem</NavItem>
      </NavSection>
      <ContactSection>
        <SectionTitle>CONTATE-NOS</SectionTitle>
        <FooterText>CESAR School</FooterText>
        <FooterText>contato@plurii.com</FooterText>
      </ContactSection>
      <DoubtsSection>
        <SectionTitle>DÚVIDAS</SectionTitle>
        <FooterText>Perguntas ou feedback? Adoraríamos ouvir você</FooterText>
        <SocialIcons>
        </SocialIcons>
      </DoubtsSection>
    </FooterContainer>
  );
};

export default Footer;