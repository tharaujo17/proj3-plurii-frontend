import styled from 'styled-components';
import backgroundImage from '../../../assets/background.svg';


// elementos da Header
export const ContainerMaster = styled.div``;

// Elementos da Section.tsx
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 150px; 
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

// para insercao imagem do logo
export const CardLogo = styled.img`
  aspect-ratio: 0.95;
  object-fit: contain;
  object-position: center;
  width: 450px;
  height: auto;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardContainer = styled.form`
  display: flex;
  width: 30%;
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

export const CardContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  width: 60%;
  align-items: center;
  //background-color: #fff; // Adiciona cor de fundo branca
  border: 0px solid #ddd;
  padding: 5px;
  margin-bottom: 20px; // Aumenta a margem inferior
  gap: 10px; // Aumenta o espaço entre os detalhes
  //box-sizing: border-box;
  //border-radius: 10px; // Arredonda os cantos
  //box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Adiciona sombra
`;

export const CardTitle = styled.h2`
  font-size: 1.5em;
  color: #000;
  margin-bottom: 0.5px
`;

export const CardDetails = styled.label` 
  margin-left: 10px; // Adiciona espaço à esquerda para alinhar com o título
`;

export const DetailButton = styled.a`
  background-color: #bff600;
  color: #000; // Cor do texto
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  padding: 12px 24px; // Ajuste o padding para corresponder ao design
  border-radius: 10px; // Aumente o border-radius para um efeito mais arredondado
  display: inline-block; // Permite a definição de margem e padding
  cursor: pointer;
  transition: all 0.3s ease; // Suaviza a transição de estados

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); // Aumenta a sombra ao passar o mouse
  }
`;

export const BoxDetail = styled.input`
  color: #000;
  letter-spacing: 1.0px;
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