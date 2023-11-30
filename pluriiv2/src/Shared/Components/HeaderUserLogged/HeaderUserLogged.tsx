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
    /*const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
      // Função para obter dados do usuário
      const fetchUserData = async () => {
        try {
          // Recupere o token de acesso do localStorage
          const accessToken = localStorage.getItem('access_token');
  
          // Verifique se o token está presente
          if (accessToken) {
            // Faça a solicitação autenticada
            const response = await fetch('https://plurii.up.railway.app/users/email/', {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`, // Adicione o token ao cabeçalho de autorização
              },
            });
  
            if (!response.ok) {
              // Lidere com erros de solicitação, como token expirado, etc.
              console.error('Erro na solicitação:', response.status, response.statusText);
            } else {
              // Processar a resposta bem-sucedida
              const data = await response.json();
              setUserData(data); // Atualize o estado com os dados do usuário
            }
          } else {
            console.log('Token de acesso ausente. Redirecionando para a página de login.');
          }
        } catch (error) {
          console.error('Erro ao obter dados do usuário:', error);
        }
      };
  
      fetchUserData();
    }, []);
    */

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
            <UserName>Marcelo Alves</UserName>
            <UserRA>RA: 2023010895</UserRA>
        </UserInfoDetails>
      </UserInfoWrapper>
    </Wrapper>
        </Container>

    );
};

export default HeaderUserLogged;