import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  //여러개의 todo를 받을 수 있는 배열
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo(""); //toDo와 input이 연결되어 있음 -> input 비워줌
    setToDos((currentArray) => [toDo, ...currentArray]); //...currentArray -> 모든 이전의 toDo를 받아옴
  };
  console.log(toDos);

  return (
    <div>
      <h1>My To</h1>My
      <form onSubmit={onSubmit}>
        {/* form : submit 이벤트 가지고 있음 */}
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do.."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}
export default App;
