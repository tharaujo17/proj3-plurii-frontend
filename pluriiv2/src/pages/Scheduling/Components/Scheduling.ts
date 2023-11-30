import styled from 'styled-components';

export const ContainerMaster = styled.div``;

// Inicio para Scheduling.tsx
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  margin: auto 0;
  padding: 0 20px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const GarageImage = styled.img`
  object-fit: contain;
  width: 37rem;
  margin-left: 105.4rem;
  height: auto;
  position: relative;
  top: -28rem;
`;

export const Title = styled.div`
  margin-top: 9.375rem;
  margin-left: 1.875rem;
  color: #000;
  letter-spacing: 0.263rem;
  text-transform: uppercase;
  font:
    900 60px Poppins,
    sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

export const Description = styled.div`
  margin-left: 1.875rem;
  width: 40.938rem;
  margin-top: 2.813rem;
  font:
    400 17px Poppins,
    sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const SelectDate = styled.div`
  letter-spacing: 0.197rem;
  text-transform: uppercase;
  position: relative;
  margin-left: 1.875rem;
  bottom: 30rem;
  font:
    900 45px Poppins,
    sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

// Inicio para SchedulingDate.tsx
export const SchedulingDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;
  position: relative;
  bottom: 30rem;
`;

export const SchedulingDateWrapper = styled.div`
  border-radius: 20px;
  border: 0px solid rgba(0, 0, 0, 0.13);
  background-color: #ebf2fb;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  padding: 10px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const SchedulingDateBox = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 17px;
  background-color: #fff;
  display: flex;
  width: 331px;
  height: 44px;
  flex-direction: column;
  justify-content: center;
`;

export const SchedulingDateImageContainer = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 31px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 17px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SchedulingDateLazyImage = styled.img`
  aspect-ratio: 1.01;
  object-fit: contain;
  object-position: center;
  width: 86px;
  fill: #fff;
  transition: all 0.3s ease;
  overflow: hidden;
  align-self: start;
  max-width: 100%;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 25px #bff600;
  }
`;

export const SchedulingDateBox2 = styled.div`
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 17px;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 86px;
  height: 88px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 25px #bff600;
  }
`;

export const SchedulingDateBox3 = styled.div`
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 17px;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 86px;
  height: 88px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 25px #bff600;
  }
`;

export const SchedulingDateBox4 = styled.div`
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 17px;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 86px;
  height: 88px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 25px #bff600;
  }
`;

export const SchedulingDateBox5 = styled.div`
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 17px;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 86px;
  height: 88px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 25px #bff600;
  }
`;

export const SchedulingDateBox6 = styled.div`
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 17px;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 86px;
  height: 88px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 25px #bff600;
  }
`;

export const SchedulingDateBox7 = styled.div`
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 17px;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 86px;
  height: 88px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 25px #bff600;
  }
`;

export const SchedulingDateBox8 = styled.div`
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 17px;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 86px;
  height: 88px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 25px #bff600;
  }
`;

export const SchedulingDateBox9 = styled.div`
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 17px;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 86px;
  height: 88px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 25px #bff600;
  }
`;

export const SchedulingDateBox10 = styled.div`
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 17px;
  align-self: stretch;
  display: flex;
  width: 86px;
  height: 88px;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  text-align: center;
  padding: 10px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 25px #bff600;
  }
`;

export const SchedulingDateBox11 = styled.div`
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 17px;
  align-self: stretch;
  display: flex;
  width: 86px;
  height: 88px;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  text-align: center;
  padding: 10px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 25px #bff600;
  }
`;

export const SchedulingDateBox12 = styled.div`
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 17px;
  align-self: stretch;
  display: flex;
  width: 86px;
  height: 88px;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  text-align: center;
  padding: 10px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 25px #bff600;
  }
`;

export const SchedulingDateBox13 = styled.div`
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 17px;
  align-self: stretch;
  display: flex;
  width: 86px;
  height: 88px;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  text-align: center;
  padding: 10px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 25px #bff600;
  }
`;

// Inicio para SchedulingForm.tsx
export const SchedulingFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.825rem;
  position: relative;
  bottom: 12rem;
`;

export const SchedulingFormTitle = styled.div`
  color: #000;
  letter-spacing: 3.15px;
  text-transform: uppercase;
  align-self: stretch;
  padding-bottom: 44px;
  font:
    900 45px Montserrat,
    sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

export const SchedulingFormSection = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 25px;
  width: 100%;
  padding-right: 13px;
  gap: 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

export const SchedulingFormLabel = styled.label`
  color: var(--Paragraph-Color, #6e6e6e);
  font:
    400 17px Poppins,
    sans-serif;
`;

export const SchedulingFormInput = styled.input`
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #fff;
  align-self: start;
  display: flex;
  width: 100%;
  height: 50px;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  padding: 5px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const SchedulingFormRadioButton = styled.div`
  align-self: center;
  display: flex;
  align-items: flex-start;
  gap: 9px;
  margin: auto 0;

  @media (max-width: 991px) {
    justify-content: center;
  }
`;

export const SchedulingFormRadioInput = styled.input`
  stroke-width: 1px;
  border-radius: 50%;
  display: flex;
  width: 16px;
  height: 15px;
  flex-direction: column;
`;

export const SchedulingFormRadioLabel = styled.label`
  color: #263238;
  margin-top: 4px;
  font:
    400 15px Poppins,
    sans-serif;
`;

export const SchedulingFormButton = styled.a`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 73px;
  width: 260px;
  background-color: #bff600;
  font-family: Poppins, sans-serif;
  font-size: 25px;
  color: #000; // Cor do texto
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  padding: 12px 24px; // Ajuste o padding para corresponder ao design
  border-radius: 30px; // Aumente o border-radius para um efeito mais arredondado
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); // Ajuste a sombra conforme necessário
  cursor: pointer;
  border: none; // Remova a borda
  transition: all 0.3s ease; // Suaviza a transição de estados

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); // Aumenta a sombra ao passar o mouse
  }
`;