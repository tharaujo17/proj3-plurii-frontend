import React from 'react';
import {
  SchedulingFormContainer,
  SchedulingFormTitle,
  SchedulingFormSection,
  SchedulingFormLabel,
  SchedulingFormInput,
  SchedulingFormRadioButton,
  SchedulingFormRadioInput,
  SchedulingFormRadioLabel,
  SchedulingFormButton,
} from '../Components/Scheduling';
// import { Container } from './styles';

const SchedulingForm: React.FC = () => {
  return (
    <SchedulingFormContainer>
      <SchedulingFormTitle>
        Complete as Informações da reserva
      </SchedulingFormTitle>
      <SchedulingFormSection>
        <SchedulingFormLabel>Nome da Atividade</SchedulingFormLabel>
        <SchedulingFormInput type="text" />
      </SchedulingFormSection>
      <SchedulingFormSection>
        <SchedulingFormLabel>Número de Participantes</SchedulingFormLabel>
        <SchedulingFormInput type="text" />
      </SchedulingFormSection>
      <SchedulingFormSection>
        <SchedulingFormLabel>Descrição da atividade</SchedulingFormLabel>
        <SchedulingFormInput type="text" />
      </SchedulingFormSection>
      <SchedulingFormSection>
        <SchedulingFormLabel>Precisará de ajuda?</SchedulingFormLabel>
        <SchedulingFormRadioButton>
          <SchedulingFormRadioInput type="radio" id="yes" name="help" />
          <SchedulingFormRadioLabel htmlFor="yes">Sim</SchedulingFormRadioLabel>
          <SchedulingFormRadioInput type="radio" id="no" name="help" />
          <SchedulingFormRadioLabel htmlFor="no">Não</SchedulingFormRadioLabel>
        </SchedulingFormRadioButton>
      </SchedulingFormSection>
      <SchedulingFormButton>Enviar</SchedulingFormButton>
    </SchedulingFormContainer>
  );
};

export default SchedulingForm;
