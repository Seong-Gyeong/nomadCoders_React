import { number } from "prop-types";
import { useState, useEffect } from "react";

function Hello() {
  /* function byeFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created:)");
    return byeFn;
  } 
  useEffect(hiFn, []); */

  //궁금한 것 : hiFn이 실행되고 나서 bye를 리턴하는데, showing이 false인 상태에서 어떻게 bye가 출력이 되는 것?

  useEffect(() => {
    console.log("created:)");
    //cleanup function : component가 destory 될 떄 뭔가를 할 수 있도록 해준다
    return () => console.log("destroyed : (");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev); //클릭할 때마다 true/false 변화
  return (
    <div>
      {showing ? <Hello /> : null}
      {/*자바스크립트 쓸 때 중괄호 열기 기억!*/}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
export default App;
