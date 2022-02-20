import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from "./components/Movies";
import Header from "./components/Header";
import Details from "./components/Details";

const MOVIES_LIST_URL = "https://api.themoviedb.org/3/movie/500/similar?api_key=29b93bae8c2da9ca4afabbd1384e3cc0";

function App() {
  const [movies, setMovies] = useState([]);
  const [toggled, setToggled] = useState(false);
    
  function showDetails(e) {
      e.preventDefault();
      setToggled(true);
  }

  function closeDetails() {
    setToggled(false);
  }

  useEffect(() => {
    // Load Movies
    axios
      .get(`${MOVIES_LIST_URL}`)
      .then((res) => setMovies(res.data.results));

  }, []);

  return (
    <div className="App">
      <Header />
      <Movies title="Movies" movies={movies} showDetails={showDetails} />
      <Details toggle={toggled} closeDetails={closeDetails} />
    </div>
  );
}

export default App;
