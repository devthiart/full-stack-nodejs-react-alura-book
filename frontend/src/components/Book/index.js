import styled from 'styled-components';

const BookItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 10px;
  max-width: 25vw;
  min-height: 25vh;
  cursor: pointer;

  p {
    color: #363636;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    width: 200px;
  }

  img {
    width: 250px;
  }

  &:hover {
    /* border: 1px solid white; */
    border-radius: 8px;
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
    
    p {
      text-decoration: underline;
    }
  }
`;

const BookContainer = styled.section`
  background-color: #EBECEE;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-evenly;
`;

export {
  BookItem,
  BookContainer
}