## 어떻게 특정 코드들이 첫번째 component render에서만 실행되게 할 수 있을까?

(render될 때마다 모든 코드가 실행되게 하지 않게!)

---

## useEffect

```
function App() {

  ...

  console.log("I run all the time"); //버튼을 누를 때마다 실행됨
  useEffect(() => {
    console.log("CALL THE API"); //처음 한 번만 실행됨
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
```

$ \rightarrow $ useEffect의 첫번째 인자로 들어가는 함수는 첫번째 컴포넌트 렌더링에서만 실행됨
