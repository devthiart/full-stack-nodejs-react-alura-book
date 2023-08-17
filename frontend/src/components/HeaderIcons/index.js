import profile from '../../imgs/perfil.svg';
import bag from '../../imgs/sacola.svg';
import styled from 'styled-components';

const icons = [
  { src: profile, alt: 'Ícone de perfil' },  
  { src: bag, alt: 'Ícone da sacola' }
];

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const IconList = styled.ul`
  display: flex;
  align-items: center;
`;

function HeaderIcons() {
  return (
    <IconList>
      { 
        icons.map( (icon, index) => (
          <Icon key={index}><img src={icon.src} alt={icon.alt}></img></Icon>
        )) 
      }
    </IconList>
  )
}

export default HeaderIcons;
