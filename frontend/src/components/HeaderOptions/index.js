import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Option = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
  text-transform: uppercase;
`;

const OptionList = styled.ul`
  display: flex;
`;

const textOptions = ['Categories', 'Favorites', 'My Bookcase'];

function HeaderOptions() {
  return (
    <OptionList>
      {
        textOptions.map( (text, index) => { 
          const routerText = text.toLowerCase().replace(' ', '-');

          return (
            <Link to={`/${routerText}` } key={index}>
              <Option ><p>{text}</p></Option>
            </Link>
          )
        } )
      }
    </OptionList>
  )
}

export default HeaderOptions;
