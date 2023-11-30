import React from 'react';

import{
    Container, 
    TitleH2,
    Card,
    Column,
    ReservationCard, 
    ReservationInfo,
    ImageLabroom,
    ReservationDetails,
    Image2,
    Options,
    Option1,
    Option2, 
    Option3,

} from '../Components/Approval';

const ApprovalSection2: React.FC = () => {
    return (
        <Container>
        <TitleH2>Reservas a confirmar</TitleH2>
        <Card>
          <Column>
            <ReservationCard>
              <ReservationInfo>reserva nº 3852758</ReservationInfo>
              <ReservationInfo>Garagem 2</ReservationInfo>
              <ImageLabroom loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1a3541c9-5e4e-485d-9953-d823a46bcca2?apiKey=a1db434e8bb443c388759ab267e2ac6a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a3541c9-5e4e-485d-9953-d823a46bcca2?apiKey=a1db434e8bb443c388759ab267e2ac6a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a3541c9-5e4e-485d-9953-d823a46bcca2?apiKey=a1db434e8bb443c388759ab267e2ac6a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a3541c9-5e4e-485d-9953-d823a46bcca2?apiKey=a1db434e8bb443c388759ab267e2ac6a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a3541c9-5e4e-485d-9953-d823a46bcca2?apiKey=a1db434e8bb443c388759ab267e2ac6a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a3541c9-5e4e-485d-9953-d823a46bcca2?apiKey=a1db434e8bb443c388759ab267e2ac6a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a3541c9-5e4e-485d-9953-d823a46bcca2?apiKey=a1db434e8bb443c388759ab267e2ac6a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a3541c9-5e4e-485d-9953-d823a46bcca2?apiKey=a1db434e8bb443c388759ab267e2ac6a&"/>
            </ReservationCard>
          </Column>
          <Column>
            <ReservationDetails>
              <Image2
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/625da70d-338d-4bfe-b3fe-7876accea64d?apiKey=a1db434e8bb443c388759ab267e2ac6a&"
              />
              <ul>
                <li>Gostaria de ter acesso à sala de ferramentas.</li>
                <li>Utilizar kits de Arduíno para workshop.</li>
                <li>Grupo de 20 pessoas.</li>
              </ul>
              <Options>
                <Option1 />
                <Option2 />
                <Option3 />
              </Options>
            </ReservationDetails>
          </Column>
        </Card>
      </Container>
    );
  };
export default ApprovalSection2