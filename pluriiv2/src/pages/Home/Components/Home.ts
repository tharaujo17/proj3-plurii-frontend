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
  letter-spacing: 1.192px;
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
  font:
    900 60px/90px Poppins,
    sans-serif;
    z-index: 1000;
    margin-right: 90px;
`;

export const Section2Description = styled.div`
  color: #000;
  width: auto;
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
  background-color: #fff; // Adiciona cor de fundo branca
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px; // Aumenta a margem inferior
  gap: 10px; // Aumenta o espaço entre os detalhes
  box-sizing: border-box;
  border-radius: 10px; // Arredonda os cantos
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Adiciona sombra
`;

export const CardTitle = styled.h2`
  font-size: 1.5em;
  color: #000;
`;

export const CardDetails = styled.div` 
  margin-left: 20px; // Adiciona espaço à esquerda para alinhar com o título
`;

export const HomeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 150px; 
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DetailButton = styled.a`
  background-color: #BFF600;
  color: #000; // Cor do texto
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  padding: 12px 24px; // Ajuste o padding para corresponder ao design
  border-radius: 30px; // Aumente o border-radius para um efeito mais arredondado
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); // Ajuste a sombra conforme necessário
  display: inline-block; // Permite a definição de margem e padding
  cursor: pointer;
  border: none; // Remova a borda
  transition: all 0.3s ease; // Suaviza a transição de estados

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); // Aumenta a sombra ao passar o mouse
  }
`;

export const SubTitleDecorationSection2 = styled.img`
    aspect-ratio: 14.36;
    object-fit: contain;
    object-position: center;
    width: 359px;
    stroke-width: 8px;
    stroke: #bff600;
    overflow: hidden;
    margin-top: -25px;
    max-width: 100%;
`