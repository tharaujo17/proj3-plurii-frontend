import * as S from './styles';
import Logo from '../../molecules/Logo';
import Menu from '../../organisms/Menu';
import Button from '../../atoms/Button';

const Header = () => {
  return (
    <S.HeaderContainer>
      <Logo />
      <Menu />
      <Button />
    </S.HeaderContainer>
  );
};

export default Header;
