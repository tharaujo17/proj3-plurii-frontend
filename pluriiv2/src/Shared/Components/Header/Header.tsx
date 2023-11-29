import React from 'react';

import {
  AboutLink,
  ContactLink,
  Container,
  HomeLink,
  Logo,
  Menu,
} from './styled';
import LogoHeader from '../../../assets/logo-header.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Menu>
        <HomeLink href="#">Home</HomeLink>
        <AboutLink href="#">Login</AboutLink>
        <ContactLink href="#">Contato</ContactLink>
      </Menu>
      <Logo src={LogoHeader} />
    </Container>
  );
};

export default Header;
