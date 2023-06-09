
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
    <Row isPoster="true" title="Trending" fetchUrl={requests.fetchTrending}></Row>
    <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
    <Row title="TopRated" fetchUrl={requests.fetchTopRated}></Row>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
  
    </div>
  );
}

export default App;
