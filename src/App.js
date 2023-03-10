import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';

/*
React Router 설치: npm i react-router-dom@5.3.0

Route는 브라우저 주소창에 페이지마다 붙는 경로부분을 의미한다. 
<Switch>는 Route를 찾는다. 그리고 Route를 찾으면 컴포넌트를 렌더링한다. 
<Switch>를 쓰지 않으면, 두 개의 Route를 한 번에 랜더링할 수 있게 된다. 
한 번에 하나의 Route만 랜더링되기를 원하면 <Switch>를 사용한다.
*/

function App() {
  return <Router>
    <Switch>
      <Route path='/movie/:id'>
        <Detail />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;
