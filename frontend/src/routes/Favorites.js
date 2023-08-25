import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getFavorites, deleteFavorites } from '../services/favorites';
import { BookContainer, BookItem } from '../components/Book';
import { Title } from '../components/Title';
import defaultImgBookCover from '../imgs/livro.png';

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`;

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function fetchFavorites() {
    const APIfavorites = await getFavorites();
    setFavorites(APIfavorites);
  }

  async function removeFavorites(id) {
    await deleteFavorites(id);
    await fetchFavorites();
    alert(`Book with id ${id} removed from your favorite list`);
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <AppContainer>
      <Title
        color="#EB9B00" 
        fontSize="36px"
      >
        My Favorite Books
      </Title>
      <BookContainer>
        {
          favorites.map( (favorite) => (
            <BookItem
              onClick={ () => { removeFavorites(favorite.id) } }
            >
              {
                favorite.imgSrc ? 
                  ( <img src={ favorite.imgSrc } alt="Book cover"></img> ) : 
                  ( <img src={ defaultImgBookCover } alt="Book cover" /> ) 
              }
              { favorite.name }
            </BookItem>
          ))
        }
      </BookContainer>
      
    </AppContainer>
  );
}

export default Favorites;
