import styled from 'styled-components';

// Elementos da Section.tsx
export const Container = styled.div`
  display: flex;
  margin-top: 72px;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: start;
  padding: 0 20px;
`;

export const Title = styled.div`
  color: #000;
  letter-spacing: 1.1900000000000002px;
  text-transform: uppercase;
  font:
    900 17px/25.5px Poppins,
    sans-serif;
`;

export const SubTitle = styled.div`
  color: #000;
  letter-spacing: 4.2px;
  text-transform: uppercase;
  align-self: stretch;
  margin: 28px -20px 0 0;
  font:
    900 60px Poppins,
    sans-serif;
`;

export const Description = styled.div`
  color: #000;
  align-self: stretch;
  margin: 47px -20px 0 0;
  font:
    400 17px Poppins,
    sans-serif;
`;

export const Actions = styled.div`
  display: flex;
  margin-top: 91px;
  width: 456px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
`;

export const AboutUsBtn = styled.a`
  color: #000;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border-radius: 19px;
  border: 1px solid #000;
  background-color: rgba(191, 246, 0, 0);
  flex-grow: 1;
  align-items: center;
  padding: 23px 20px;
  text-decoration: none;
  font:
    600 15px Poppins,
    sans-serif;
`;

export const ReserveBtn = styled.a`
  color: #fff;
  text-align: center;
  text-decoration: none;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  white-space: nowrap;
  border-radius: 19px;
  background-color: #000;
  flex-grow: 1;
  align-items: center;
  padding: 27px 20px 21px;
  font:
    600 15px Poppins,
    sans-serif;
`;

export const SubTitleDecoration = styled.img`
  aspect-ratio: 14.36;
  object-fit: contain;
  object-position: center;
  width: 359px;
  stroke-width: 8px;
  stroke: #bff600;
  overflow: hidden;
  margin-top: -20px;
  max-width: 100%;
`;

// Section 2
export const Section2Title = styled.div`
  color: #000;
  letter-spacing: 4.2px;
  text-transform: uppercase;
  margin-right: -20px;
  margin-top: 117px;
  font:
    900 60px/90px Poppins,
    sans-serif;
`;

export const Section2Description = styled.div`
  color: #000;
  width: 450px;
  height: auto;
  margin: 46px -20px 0 0;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
`;

export const CardImage = styled.img`
  aspect-ratio: 0.95;
  object-fit: contain;
  object-position: center;
  width: 360px;
  height: auto;
  overflow: hidden;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  color: #000;
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 10px;
  gap: 5px;
  box-sizing: border-box;
`;

export const CardTitle = styled.h2`
  font-size: 1.5em;
  color: #000;
`;

export const CardDetails = styled.div` 
  // Detalhes do cartão
`;
