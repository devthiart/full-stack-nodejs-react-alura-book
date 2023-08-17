import { books } from './dataLastReleases';
import styled from 'styled-components';
import { Title } from '../Title';
import RecommendationCard from '../RecommendationCard';
import AngularImg from '../../imgs/livro2.png';

const LastReleasesContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastReleases() {
  return (
    <LastReleasesContainer>
      <Title 
        color="#EB9B00" 
        fontSize="36px"
      >
        Last Releases
      </Title>
      <NewBooksContainer>
        {
          books.map((book, index) => (
            <img src={ book.imgSrc } alt={ book.name } key={ index } />
          ))
        }
      </NewBooksContainer>
      <RecommendationCard 
        title="Maybe you are interested in..."
        subtitle="Angular 11"
        description="Building an application integrated with the Google platform."
        img={ AngularImg }
      />
    </LastReleasesContainer>
  );
}

export default LastReleases;
