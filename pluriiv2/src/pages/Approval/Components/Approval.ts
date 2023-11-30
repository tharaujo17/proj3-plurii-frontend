import styled from "styled-components";

export const ContainerMaster = styled.div`
`;

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 50px 80px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  margin: auto 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Title = styled.div`
  color: #000;
  letter-spacing: 4.2px;
  text-transform: uppercase;
  font: 900 60px Poppins, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

export const Description = styled.div`
  color: #000;
  margin-top: 45px;
  font: 400 17px Poppins, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const Image = styled.img`
  aspect-ratio: 1.01;
  object-fit: contain;
  object-position: center;
  width: 263px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
`;

export const TitleH2 = styled.div`
  color: var(--Heading-Color, #1b1717);
  letter-spacing: 3.15px;
  text-transform: uppercase;
  width: 100%;
  font: 900 45px Poppins, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

export const Card = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  margin-top: 54px;
  width: 100%;
  padding: 36px 22px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 17%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const ReservationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const ReservationInfo = styled.div`
  color: #000;
  letter-spacing: 1.19px;
  text-transform: uppercase;
  align-self: stretch;
  font: 600 17px Poppins, sans-serif;
`;


export const ImageLabroom = styled.img`
  aspect-ratio: 1.18;
  object-fit: contain;
  object-position: center;
  width: 206px;
  overflow: hidden;
  margin-top: 10px;
`;

export const ReservationDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const Image2 = styled.img`
  aspect-ratio: 1.57;
  object-fit: contain;
  object-position: center;
  width: 36px;
  overflow: hidden;
  max-width: 100%;
`;

export const Options = styled.div`
  align-self: start;
  display: flex;
  width: 805px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
  margin: 50px 0 0 20px;
  padding: 0 1px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
`;

export const Option1 = styled.div`
  border-radius: 10px;
  background-color: #bff600;
  display: flex;
  width: 214px;
  height: 58px;
  flex-direction: column;
`;

export const Option2 = styled.div`
  border-radius: 10px;
  background-color: #000;
  display: flex;
  width: 230px;
  height: 58px;
  flex-direction: column;
`;

export const Option3 = styled.div`
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #fff;
  display: flex;
  width: 214px;
  height: 58px;
  flex-direction: column;
`;