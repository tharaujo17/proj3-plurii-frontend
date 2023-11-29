import React from 'react';

import{ 
    Container,
    Wrapper,
    ImageWrapper,
    Logo_P,
    UserImage,
    UserInfoWrapper,
    UserInfoDetails,
    UserName,
    UserRA,
    
} from './HeaderUserLoggedStyles';

import PicLogo_P from '../../../assets/header-Loggged-logo-P.svg';
import MenuSanduba from '../../../assets/header-menu-sandwich.svg';
import ProfilePic from '../../../assets/profile_pic.png';

const HeaderUserLogged: React.FC = () => {
    return (
        <Container>
              <Wrapper>
                <ImageWrapper>
                    <Logo_P src= {PicLogo_P} />
                    <Logo_P src= {MenuSanduba} />
                </ImageWrapper>
                <UserInfoWrapper>
                    <UserImage src= {ProfilePic}/>
                <UserInfoDetails>
            <UserName>Carla Silva</UserName>
            <UserRA>RA: 2023010895</UserRA>
        </UserInfoDetails>
      </UserInfoWrapper>
    </Wrapper>
        </Container>

    );
};

export default HeaderUserLogged;