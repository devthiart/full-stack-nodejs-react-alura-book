import styled from 'styled-components';
import logo from '../../imgs/logo.svg';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  margin-left: 32px;
`;

const LogoImage = styled.img`
  margin-right: 10px;
`;

function Logo () {
  return (
    <LogoContainer>
      <LogoImage
        src={logo} 
        alt="Alura Books Logo" 
      />
      <p><strong>Alura</strong>Books</p>
    </LogoContainer>
  );
}

export default Logo;
