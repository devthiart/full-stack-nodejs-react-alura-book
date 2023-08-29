import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from 'react';
import { getBooks } from '../../services/books';
import { BookItem, BookContainer } from "../Book";
import { Title } from '../Title';
import { postFavorites } from "../../services/favorites";
import defaultImgBookCover from '../../imgs/cover-not-available.png';

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0 24px 0;
  height: 270px;
  width: 100%;
`;

const SearchTitle = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

function Search() {
  const [researchedBooks, setResearchedBooks] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const booksAPI = await getBooks();
    console.log(booksAPI);
    setBooks(booksAPI);
  }

  async function insertFavorite(id) {
    await postFavorites(id);
    alert(`book with id ${id} added to your favorites list`);
  }

  return (
    <>
      <SearchContainer>
        <SearchTitle>Already know where to start?</SearchTitle>
        <Subtitle>Find your book on our bookcase.</Subtitle>
        <Input 
          placeholder="Search your new reading"
          onBlur={ event => {
            const typedText = event.target.value;
            const searchResult = books.filter( book => {
              return book.name.includes(typedText);
            });
            setResearchedBooks(searchResult);

          }}
        />
      </SearchContainer>
      <BookContainer>
        {
          (researchedBooks.length > 0)  
            ? <Title color="#EB9B00" fontSize="36px">We found {researchedBooks.length} results</Title> 
            : console.log("Zero Results")
        }
        { researchedBooks.map( (book, index) => (
          <BookItem key={ index } onClick={ () => insertFavorite(book.id) }>
            { book.imgUrl ? 
                ( <img src={ book.imgUrl } alt="Book cover"></img> ) : 
                ( <img src={ defaultImgBookCover } alt="Book cover" /> ) 
            }
            <p>{ book.name }</p>
          </BookItem>
        )) }
      </BookContainer>
    </>
  );
}

export default Search;
