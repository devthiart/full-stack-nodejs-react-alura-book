import LastReleases from '../components/LastReleases';
import Search from '../components/Search';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`;

function Home() {
  return (
    <AppContainer>
      <Search />
      <LastReleases />
    </AppContainer>
  );
}

export default Home;
