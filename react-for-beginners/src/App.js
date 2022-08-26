//import Button from "./Button";
//import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  //const기 때문에 toDos.push() 와 같이 toDo를 직접 수정하지 않는다.
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    if (toDo === "") {
      return; //submit 되지 않도록
    }
    setToDo(""); //입력창 비우기
    setToDos((currentArray) => [toDo, ...currentArray]);
    //인자로 들어간 함수 : 원래 toDos에 toDo를 추가하는 방법
  };

  console.log(toDos);
  return (
    <div>
      <h1 style={{ fontFamily: "cursive" }}>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do...."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>{toDo}</li>
        ))}
        {/*배열의 element를 모두 새로운 값으로 바꾸고 싶을 떄 사용, 배열의 요소 개수만큼 실행된다
      가능*/}
      </ul>
    </div>
  );
}

export default App;
