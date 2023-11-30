import styled from 'styled-components';

export const Container = styled.header`
  height: 7.688em;
  justify-content: space-between;
  box-shadow: 0px 4px 4px 0px rgba(235, 235, 235, 0.6);
  background-color: #fff;
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

export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 15px 15px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const Logo_P = styled.img`
  aspect-ratio: 0.69;
  object-fit: contain;
  object-position: center;
  width: 42px;
  overflow: hidden;
  max-width: 100%;
`;

export const UserImage = styled.img`
  aspect-ratio: 1.15;
  object-fit: contain;
  object-position: center;
  width: 92px;
  overflow: hidden;
  max-width: 100%;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  margin-top: 7px;
  gap: 6px;
`;

export const UserInfoDetails = styled.div`
  align-self: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  margin: auto 0;
`;

export const UserName = styled.div`
  color: #000;
  font: 600 17px Inter, sans-serif;
`;

export const UserRA = styled.div`
  color: #000;
  margin-top: 14px;
  font: 200 20px Inter, sans-serif;
`;