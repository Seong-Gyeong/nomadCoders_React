## [Problem]

### 어떻게 특정 코드들이 첫번째 component render에서만 실행되게 할까?

### 혹은 어떤 component의 특정데이터가 변화할 때만 실행되게 할 수 있을까? (render될 때마다 모든 코드가 실행되게 하지 않게!)

---

## [Solution]

### **useEffect**

#### $\rightarrow$ useEffect를 통해 코드가 언제 실행될 지에 대한 선택권을 가질 수 있다 <br/>

- useEffect의 첫번째 인자 argument : 우리가 실행시키고 싶은 코드
- useEffect의 두번째 인자 dependencies : react.js가 지켜보아야 하는 것들로, dependencies가 변화하면 argument가 실행된다

```
function App() {

  ...

  console.log("I run all the time"); //버튼을 누를 때마다 실행됨
  useEffect(() => {
    console.log("CALL THE API"); //dependency가 없기 때문에 처음 한 번만 실행됨
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
```

$ \rightarrow $ 이 경우 dependencies가 없기 때문에 처음 한 번만 실행됨

<br/>

```
function App() {
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("Keyword has changed");
  },[keyword]); //keyword가 변화할 때만 실행됨
  return {
     <div>
      <input
        value={keyword}
        onChange={onChange} //사용자의 input이 변화할 때 호출됨
        type="text"
        placeholder="keywords">
    </div>
  }
}
```

$ \rightarrow $ 이 경우 dependencies가 keyword 하나기 때문에 keyword가 변화할 때만 실행됨 <br/>
$ \rightarrow $ **[keyword,counter] 이렇게 명시하면 keyword나 counter 중 하나가 바뀔 때마다 실행되게 할 수 있다**

#
