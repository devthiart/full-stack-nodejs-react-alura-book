import Header from './components/Header';
import LastReleases from './components/LastReleases';
import Search from './components/Search';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LastReleases />
    </AppContainer>
  );
}

export default App;
