state : 데이터가 저장되는 곳

<li>vanillaJS : 변경하고 새로고침하면 태그 전체를 재생성함
<li>React JS : 태그 내에서 바뀐 부분만 새로 고침됨  </br> 
&#8594; React JS는 이전에 렌더링 된 컴포넌트와 다음에 렌더링되는 컴포넌트를 기억하고 변경된 부분만 새로 생성하게 해줌

#

### **<버튼을 클릭하면 Total Clicks를 증가시키고 그것을 화면에 보여주고 싶다>**

<br/>

**방법 1.** countUp 함수 내에 render 함수를 넣어서 버튼을 누를 때마다 렌더링이 되도록 한다.

```
 function countUp() {
    counter++;
    render();
}

function render() {
    ReactDOM.render(<App />, root);
}
```

&#8594; 그다지 좋은 방법은 아님. 매번 렌더링을 해줘야한다는 것을 잊을 수 있고, 렌더링할 것이 많아지면 리렌더링이 간단하지 않다.
<br/>
<br/>

**방법 2.** State를 사용한다

&#8594; modifier(여기서는 setCounter)를 이용해 컴포넌트(APP)를 재생성하고 UI를 리프레시하여 State를 렌더함수 없이 리렌더링 할 수 있다.

&#8594; {State} 부분만 업데이트가 되어 효율적

```
function App() {
      const [counter, setCounter] = React.useState(0);
      const onClick = () => {
        setCounter(counter + 1);
        //리렌더링의 역할(컴포넌트 업데이트)
      };
      return (
        //컴포넌트
        <div>
          <h3> Total clicks : {counter} </h3>
          <button onClick={onClick}> Click me </button>
        </div>
      );
    }

ReactDOM.render(<App />, root);
```

#

1.

```
const onClick = () => {
        setCounter(counter + 1);
};
```

<br/>

2.

```
const onClick = () => {
    setCounter((current) => current + 1);
};

```

<br/>
&#8594; 현재 값을 가지고 계산을 하는 것이 보장이 된다는 점에서 2번 방법이 더 바른 방법, 1번은 다른 어떤 부분에서 또 counter를 변경할 가능성이 있음

#

```
<h1 className="hi"> Super Converter </h1>
```

```
<label htmlFor="hours"> Hours </label>
```

JSX에서는 class(x) clasName(O) / for(x) htmlFor(O)

#

```
<input
    value={flipped ? amount * 60 : amount}
    id="minutes"
    placeholder="Minutes"
    type="number"
    onChange={onChange}
    disabled={flipped}
/>
```

- 삼항연산자 : flipped(default:false)가 true라면 flipped가 한 번 눌러졌다는 이야기, 즉 hours를 입력하고 그것을 분으로 바꿔야함
- disabled : true이면 해당 input에는 입력할 수 없다
- onChange : input에 변화가 생기면 onChange 함수를 실행한다

#

```
function App() {
      ...
      return (
        ...
          <hr />
          {index === "0" ? <MinutesToHours /> : null}
          {index === "1" ? <KmToMiles /> : null}
        ...
      );
    }

    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
```

- 한 컴포넌트 안에서 다수의 컴포넌트를 렌더링할 수 있다
- 컴포넌트는 무조건 대문자로 시작해야한다! 이것 때문에 렌더링 실패해서 시간을 많이 잡아먹었다
