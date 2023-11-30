import styled from 'styled-components';

export const Container = styled.header`
  height: 7.688em;
  align-items: flex-end;
  justify-content: flex-end;
  box-shadow: 0px 4px 4px 0px rgba(235, 235, 235, 0.6);
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 41px 0 80px;
`;

export const Logo = styled.img`
  aspect-ratio: 1.97;
  object-fit: contain;
  object-position: center;
  width: 205px;
  overflow: hidden;
  align-self: start;
  margin-top: 11px;
  max-width: 100%;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 20px;
  color: #000;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  height: 100%;

  padding: 49px 15px;
  font:
    600 15px/22.5px Poppins,
    sans-serif;
`;

export const HomeLink = styled.a`
  color: #000;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #bff600;
  }
`;

export const AboutLink = styled.a`
  color: #000;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #bff600;
  }
`;

export const ContactLink = styled.a`
  color: #000;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #bff600;
  }
`;
