import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

/*
<h2><a href="/movie">{title}</a></h2> 
위와 같이 a 태그를 써도 페이지이동이 된다. 하지만 페이지 전체가 다시 실행된다.
이걸 막으려면 <Link> 라는 컴포넌트를 사용한다.
<Link>는 브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜준다.
*/

function Movie({id, coverImg, title, summary, genres}){
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
        {/* <a href="/movie">{title}</a> */}
      </h2>
      
      <p>{summary}</p>
      <ul>
        {genres.map(g => <li key={g}>{g}</li>)}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  id : PropTypes.number.isRequired,
  coverImg : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
}
/*
propTypes는 어떤 타입의 prop을 받고 있는지 체크해준다.
{} 안에 props의 타입이 뭐고, 어떤 모양이어야 하는지 우리가 설명해주어야 한다.

예를 들면 어떤 props에 string 타입으로 넣어야 하는데, 실수로 number로 넣으면 콘솔창에 오류메세지가 떠서
틀린 것을 체크할 수 있다.

isRequired가 있으면 처음 이 props가 생성된 Home.js에서 genres가 무엇인지 반드시 정의되어야 한다. 
(이 props를 Movie 컴포넌트에서 사용하느냐 안사용하느냐는 상관 없음.)
정의되어 있지 않으면 콘솔창에 오류메세지가 뜬다.
isRequired가 붙어있지 않은 props는 없어도 오류가 나지 않는다. 
*/

export default Movie;