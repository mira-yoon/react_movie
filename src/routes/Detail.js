import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

/*
useParam()
url에 있는 변수값을 반환해준다.

const x = useParams();
console.log(x) // {id : 값}

<Route path='/movie/:id'> 여기에 :id라고 썼기 때문에
{id: 값} 를 반환하는 것이다. 

<Route path='/movie/:tomato'> 라고 했으면
{tomato: 값} 이렇게 반환한다.
*/

function Detail(){
  const {id} = useParams();
  /*
  < const 뒤에 {}를 붙이는 이유 >
  useParams()은 {id: 값} 를 반환한다. "값"만 가지고 오려면
  const x =  useParams();
  const id = x.id; 이렇게 해야 한다.

  이걸 destructuring 문법으로 
  const {id} = {id: 값} 이렇게 하면 축약해서 id라는 변수에 "값"이 할당된다.
  */
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async() => { // await은 async함수 안에 있어야 사용할 수 있다.
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json)
    setMovie(json.data.movie);
    setLoading(false);
  }

  useEffect(()=>{
    getMovie();
  },[])

  return (
    <>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.container}>
          <h1>Detail</h1>
          <img src={movie.large_cover_image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <ul>
            {movie.genres.map(g => <li key={g}>{g}</li>)}
          </ul>
          <p>{movie.description_full}</p>
          <span>rating: {movie.rating}</span>
        </div>
      )}
    </>  

  )
  
}

export default Detail;