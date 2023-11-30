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

export const ContainerSection2 = styled.div`
  background-color: #fff;
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
  margin-top: 45px;
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
  margin-left: 2.25em;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  margin-left: 6.25em;
  margin-top: 6.25em;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Arrow = styled.div`
    align-self: start;
    margin-left: 12.5em;
`;

export const ReservationCard = styled.div`
  display: flex;
  flex-direction: row;
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
  align-items: start;
  font: 400 18px Montserrat, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const Image2 = styled.img`
  aspect-ratio: 1.57;
  object-fit: contain;
  
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


export const ConfirmationBox = styled.div`
  border-radius: 10px;
  background-color: #bff600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 20px 14px 31px;

  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

export const ConfirmationText = styled.div`
  color: #000;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: auto 0;
  font: 600 15px Poppins, sans-serif;
`;

export const ConfirmationImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 30px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

export const EmailBox = styled.div`
  border-radius: 10px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 17px 19px;
`;

export const EmailText = styled.div`
  color: #fff;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: auto 0;
  font: 600 15px Poppins, sans-serif;
`;

export const EmailImage = styled.img`
  aspect-ratio: 1.4;
  object-fit: contain;
  object-position: center;
  width: 35px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

export const RejectBox = styled.div`
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 23px 14px 43px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const RejectText = styled.div`
  color: #000;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: auto 0;
  font: 600 15px Poppins, sans-serif;
`;

export const RejectImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 30px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

export const ContainerResevationClosed = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardResevationClosed = styled.div`
  border-radius: 20px;
  background-color: #eee;
  margin-top: 2.125em;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  padding: 18px 80px 18px 63px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const ContainerResevationApproved = styled.div`
  display: flex;
  flex-direction: column;
 
`;

export const ContainerResevationRow = styled.div`
  display: flex;
  flex-direction: column;
  
`;



export const CardResevationApproved = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  margin-top: 2.125em;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 80px 18px 63px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;
