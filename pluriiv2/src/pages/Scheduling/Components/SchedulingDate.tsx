import React from 'react';
import { SchedulingDateContainer, 
  SchedulingDateWrapper, 
  SchedulingDateBox, 
  SchedulingDateImageContainer, 
  SchedulingDateLazyImage, 
  SchedulingDateBox2, SchedulingDateBox3, 
  SchedulingDateBox4, SchedulingDateBox5, 
  SchedulingDateBox6, SchedulingDateBox7, 
  SchedulingDateBox8, SchedulingDateBox9, 
  SchedulingDateBox10, SchedulingDateBox11, 
  SchedulingDateBox12, SchedulingDateBox13} from '../Components/Scheduling';
// import { Container } from './styles';

const SchedulingDate: React.FC = () => {
  return (
    <SchedulingDateContainer>
      <SchedulingDateWrapper>
        <SchedulingDateBox> Dia | Semana | Mês | Ano </SchedulingDateBox>
      </SchedulingDateWrapper>
      <SchedulingDateImageContainer>
        <SchedulingDateBox2>Dom<br />5</SchedulingDateBox2>
        <SchedulingDateBox3>Seg<br />6</SchedulingDateBox3>
        <SchedulingDateBox4>Ter<br />7</SchedulingDateBox4>
        <SchedulingDateBox5>Qua<br />8</SchedulingDateBox5>
        <SchedulingDateBox6>Qui<br />9</SchedulingDateBox6>
        <SchedulingDateBox7>Sex<br />10</SchedulingDateBox7>
        <SchedulingDateBox8>Sab<br />11</SchedulingDateBox8>
        <SchedulingDateBox9>Dom<br />12</SchedulingDateBox9>
        <SchedulingDateBox10>Seg<br />13</SchedulingDateBox10>
        <SchedulingDateBox11>Ter<br />14</SchedulingDateBox11>
        <SchedulingDateBox12>Qua<br />15</SchedulingDateBox12>
        <SchedulingDateBox13>Qui<br />16</SchedulingDateBox13>
        <SchedulingDateLazyImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/15538229-6f82-420c-82b0-d109e0c4624c?apiKey=73459e4f8c8c4bfca7e13ad49cb91e19&"
        />
      </SchedulingDateImageContainer>
    </SchedulingDateContainer>
  );
};

export default SchedulingDate;
