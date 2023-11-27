import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 120px;
  align-items: flex-start;
  background-color: #1B1717; 
  color: #FFFFFF; 
  margin-top: 150px;
  font-family: 'Poppins', sans-serif;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NavSection = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DoubtsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FooterText = styled.p`
  margin: 5px 0;
`;

export const NavItem = styled.a`
  color: inherit; // Herdar cor (do pai).
  text-decoration: none;
  margin: 5px 0;
  font-size: 1em; 
  display: block; 
`;

export const SocialIcons = styled.div`
  display: flex;
`;

export const SocialIcon = styled.img`
  margin-right: 10px;
  width: 24px; 
  height: auto;
  cursor: pointer;
`;

export const SectionTitle = styled.h2`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ffffff;
`;
