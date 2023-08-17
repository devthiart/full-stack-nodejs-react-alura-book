import Logo from '../Logo';
import HeaderOptions from '../HeaderOptions';
import HeaderIcons from '../HeaderIcons';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderOptions />
      <HeaderIcons />
    </HeaderContainer>
  )
}

export default Header;
