import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/apihttps://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
      )
    ).json;
    //const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  //리스트의 요소를 화면에 paint하기 위한 방법 : map(이전 배열을 가져가서 그 배열의 각각의 item을 변형시킴)

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_img} />
              <h2>{movie.title}</h2>
              <p>{movies.summary}</p>
              <ul>
                <li>
                  {movie.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  //로딩 중이면 로딩 메세지를, 아니라면 영화를
}

export default App;
