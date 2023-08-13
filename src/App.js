import "./App.css";
import Header from "./Components/Header/Header";
import Ads from "./Components/Advertisement/Ads";
import Banner from "./Components/Banner/Banner";
import MovieCarousel from "./Components/MovieCarousel/MovieCarousel";
function App() {
  return (
    <>
      <Header />
      <Ads />
      <Banner />
      <h1 style={{ color: "#f3c222", marginLeft: "40px" }}>What to watch</h1>
      <MovieCarousel
        heading="Tops Picks"
        api="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
      ></MovieCarousel>

      <MovieCarousel
        heading="Popular"
        api="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
      ></MovieCarousel>
    </>
  );
}

export default App;
