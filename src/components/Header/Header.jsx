import LogoWhite from '../../assets/logo/white.svg'
import LogoBlack from '../../assets/logo/black.svg'
import * as S from './Header.style';

const Header = ({ mode = 'light', user = null }) => (
  <S.Container>
    <S.Logo mode={mode}>
      <img src={mode === 'dark' ? LogoBlack : LogoWhite} alt="ioasys" />
      <span>Books</span>
    </S.Logo>
  </S.Container>
)


export default Header;
