import { useEffect, useState } from 'react';
import Movie from './../components/Movie';
import styles from "./Home.module.css";


function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    //await 안에 await을 넣어서 간단하게 만들 수있다.
    const json = await(
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    /*
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    );
    const json = await response.json();
    */
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(()=>{
    getMovies();
  },[])

  console.log(movies)

  /*
  // fetch()를 사용하는 방식
  useEffect(()=>{
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
    .then((response)=> response.json())
    .then((json)=> {
      console.log(json);
      setMovies(json.data.movies)
      setLoading(false); // 로딩을 끝낸 후에는 false로 만들어야 한다.
    })
  },[])
  */
  
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map(movie => 
            <Movie 
              key={movie.id} 
              id={movie.id} 
              year={movie.year} 
              coverImg={movie.medium_cover_image} 
              title={movie.title} 
              summary={movie.summary} 
              genres={movie.genres} 
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Home;