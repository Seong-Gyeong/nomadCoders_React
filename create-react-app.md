## create-react-app

create-react-app을 사용하면 그 전까지html 상단에 많던 <script></script>를 쓰지 않아도 된다

---

### 핵심 : 컴포넌트를 분할한다.

<br/>
&#91; Button.js &#93;

```
function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
```

&#91; Button.js를 App.js에 import하면 끝 &#93;

```
import Button from "./Button";
```

---

### css module

<br/>

#### _문제_

1. style.css 파일을 만들고 index.js에 import 했을 경우 <br/>
   $ \rightarrow $ 버튼이 여러개일 때 모든 class의 이름을 따로 명시하지 않으면 Button {}으로 지정한 스타일이 일괄 적용 되어버림
2. Button.js의 Button 컴포넌트에서 style prop을 추가한다 <br/>
   $ \rightarrow $ 나쁘지 않지만 우리는 css 문법을 그대로 사용하고 싶다

#### _해결_

- Button.module.css를 만들어 Button.js에 import한다

```
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
```

$ \rightarrow $ create-react-app이 btn.module.css코드를 JS 오브젝트(styles)로 변환시켜줌 <br/>
$ \rightarrow $ 랜덤으로 태그의 클래스 이름을 만들어주어서 문제 1처럼 클래스 이름을 기억하지 않아도 된다
