## Props

부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법 (함수형 컴포넌트 : JSX를 반환하는 함수)

---

## _문제_

props를 사용하지 않았을 때 : text만 다른데도 긴 코드를 반복해서 써야하는 문제가 있다

```
function SaveBtn() {
      return (
        <button
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0, //테두리 없게
            borderRadius: 10,
          }}
        >
          Save Changes
        </button>
      );
    }

function ConfirmBtn() {
    return
        <button
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0, //테두리 없게
            borderRadius: 10,
        }}
      >
        Confirm
      </button>;
    }
```

## _해결_

### props를 사용하면 컴포넌트를 재사용하기가 용이하다

```
function Btn({ text, big }) {
      return (
        <button
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0, //테두리 없게
            borderRadius: 10,
            fontSize: big ? 18 : 16,
          }}
        >
          {text}
        </button>
      );
    }

function App() {

      ...

      return (
        <div>
          <Btn text={value} changeValue={changeValue} />
          <Btn text="Continue" />
        </div>
      );
    }
```

- {}을 통해 object인 props를 받아오고, 그 안에 가져올 property를 명시한다
- fontSize처럼 style 안에서 삼중조건문을 쓸 수도 있다

---

```
<Btn text={value} onClick={changeValue} />
```

```
function Btn({ text, changeValue }) {
    return (
            <button
            onClick={onClick}
            ...
            }}
            >
            {text}
            </button>
        );
    }
```

- HTML 요소에 onClick을 넣으면 그것은 이벤트리스너 -커스텀 컴포넌트에 onClick을 넣으면 그저 하나의 prop이다 이름만 같을 뿐. 따라서 별도로 이벤트를 달아야한다. 커스텀 컴포넌트에 style을 단다고 해서 그 style이 적용되는 게 아닌 것과 같다
- 커스텀 컴포넌트에 prop을 추가하면 그것은 자동적으로 return 안으로 들어가지 않기 때문에 직접 컴포넌트에 추가해주어야한다

---

## Memo : 변경이 없다면 리렌더링을 막을 수 있음

```
const MemorizedBtn = React.memo(Btn); //Memorized version of Btn

...

function App() {

      ...

      return (
        <div>
          <MemorizedBtn text={value} changeValue={changeValue} />
          {/*Btn({text:"Save Changes"})*/}
          <MemorizedBtn text="Continue" />
        </div>
      );
    }

```

## $\rightarrow$ 부모 컴포넌트 (App)에 어떠한 State라도 변경이 있으면 모든 자식들은 re-render되는데, Memo를 사용하면 prop이 변경이 되지 않은 부분은 re-render이 되지 않게 막을 수 있다 (console.log(text)로 확인 가능)

---

## propTypes : prop의 type을 지정해줄 수 있다

<br>

## _문제_

```
<Btn text={14} fontSize={"Continue"} />
```

$\rightarrow$ 이렇게 썼을 때 우리가 만드려는 컴포넌트 상에서는 오류지만, 문법 상으로는 오류가 전혀 없다

## _해결_

```
<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>

...

Btn.propTypes = {
      text: propTypes.string,
      fontSize: propTypes.number,
      //fontSize: propTypes.number.isRequired,
    };
```

$\rightarrow$ 이렇게 propTypes를 추가해주면 <문제>와 같은 코드에서 에러가 발생하게 된다. 협업할 떄 용이하게 쓸 수 있다! <br/>
$\rightarrow$ isRequired를 추가해 fontSize로 넘어온 값이 없을 때도 에러 발생 가능!
