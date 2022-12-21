import { useState } from 'react';
import './App.css';


function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => { return setToDo(event.target.value) };
  // const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") { // 인풋창이 비어있다면 이 함수를 작동시키지 않는다.
      return; 
    }
    setToDo("");
    setToDos(function(currentArray){
      console.log(currentArray);
      console.log(toDo);
      console.log([toDo, ...currentArray]);
      return [toDo, ...currentArray];
    })
    //setToDos(currentArray => [toDo, ...currentArray])
  }
  
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <div className="App">
          <input type="text" onChange={onChange} value={toDo} placeholder='Write your to do...' />
        </div>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item,i)=>{
          return <li key={i}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
