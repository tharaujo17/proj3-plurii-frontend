import React from 'react';

import{
    TitleH2,
    Card,
    Column,
    Column2,
    Arrow,
    ReservationCard, 
    ReservationInfo,
    ImageLabroom,
    ReservationDetails,
    Image2,
    Options,
    ContainerSection2,
    ConfirmationBox,
    ConfirmationText, 
    ConfirmationImage,
    EmailBox,
    EmailImage, 
    EmailText,
    RejectBox,
    RejectText,
    RejectImage,
    ContainerResevationClosed,
    CardResevationClosed,
    ContainerResevationApproved, 
    CardResevationApproved,
    ContainerResevationRow,


} from './Approval';

import CheckIcon from '../../../assets/approval-check.svg';
import RejectIcon from '../../../assets/aprroval_reject icon_.svg';
import MiniGaragem from '../../../assets/mini-garagem-pic.svg';

const ApprovalSection2: React.FC = () => {
    return (
        <ContainerSection2>
        <TitleH2>Reservas a confirmar</TitleH2>
        <Card>
           
            <ReservationCard>
                
                <Column>

                <ReservationInfo>reserva nº 3852758</ReservationInfo>
                <ReservationInfo>Garagem 2</ReservationInfo>
                <ImageLabroom src={MiniGaragem}/>
                </Column>
                <Column2>
                    <ReservationDetails>
                    
                    <ul>
                        <li>Gostaria de ter acesso à sala de ferramentas.</li>
                        <li>Utilizar kits de Arduíno para workshop.</li>
                        <li>Grupo de 20 pessoas.</li>
                    </ul>
                    <Options>
                        <ConfirmationBox>
                            <ConfirmationText>Confirmar</ConfirmationText>
                            <ConfirmationImage src ={CheckIcon} />
                        </ConfirmationBox>
                        <EmailBox>
                            <EmailText>Mandar e-mail</EmailText>
                            <EmailImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6049f1d-1c92-4ad5-b2e1-1c1dac53e6d7?apiKey=a1db434e8bb443c388759ab267e2ac6a&" />
                        </EmailBox>
                        <RejectBox>
                            <RejectText>Recusar</RejectText>
                            <RejectImage src= {RejectIcon} />
                        </RejectBox>
                    </Options>
                    </ReservationDetails>
                </Column2>

                <Arrow>
            
                    <Image2
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/625da70d-338d-4bfe-b3fe-7876accea64d?apiKey=a1db434e8bb443c388759ab267e2ac6a&"/>
                </Arrow>
        
            </ReservationCard>
               
        </Card>

        <ContainerResevationClosed>
            <CardResevationClosed>
                <ReservationInfo>reserva nº 895465</ReservationInfo>
                <ReservationInfo>Garagem 2</ReservationInfo>
            </CardResevationClosed>
            <CardResevationClosed>
                <ReservationInfo>reserva nº 895465</ReservationInfo>
                <ReservationInfo>Garagem 2</ReservationInfo>
            </CardResevationClosed>
            <CardResevationClosed>
                <ReservationInfo>reserva nº 895465</ReservationInfo>
                <ReservationInfo>Garagem 2</ReservationInfo>
            </CardResevationClosed>
        </ContainerResevationClosed>

        
        <TitleH2>Reservas a confirmar</TitleH2>
        <ContainerResevationApproved>
            <CardResevationApproved>
                <ContainerResevationRow>
    
                <ReservationInfo>reserva nº 12345</ReservationInfo>
                <ReservationInfo>Garagem 1</ReservationInfo>
                </ContainerResevationRow>
                <ConfirmationBox>
                    <ConfirmationText>Alterar</ConfirmationText>
                </ConfirmationBox>
                
            </CardResevationApproved>
            <CardResevationApproved>
                <ContainerResevationRow>
    
                <ReservationInfo>reserva nº 123465</ReservationInfo>
                <ReservationInfo>Garagem 2</ReservationInfo>
                </ContainerResevationRow>
                <ConfirmationBox>
                    <ConfirmationText>Alterar</ConfirmationText>
                </ConfirmationBox>
                
            </CardResevationApproved>
            <CardResevationApproved>
                <ContainerResevationRow>
    
                <ReservationInfo>reserva nº  4555673</ReservationInfo>
                <ReservationInfo>Sala 1</ReservationInfo>
                </ContainerResevationRow>
                <ConfirmationBox>
                    <ConfirmationText>Alterar</ConfirmationText>
                </ConfirmationBox>
                
            </CardResevationApproved>
            

        </ContainerResevationApproved>
        



      </ContainerSection2>
    );
  };
export default ApprovalSection2