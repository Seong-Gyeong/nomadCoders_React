React JS가 해결하고 싶은 문제 : 웹사이트를 더 interactive하게 만들고 싶다 

React-dom : 모든 React-element들을 HTML body에 둘 수 있도록 해주는 library or package

ReactDOM.render(span, root);
-> React element를 가지고 HTML로 만들어 root 하위에 배치한다, 즉 시용자에게 보여준다

const span = React.createElement(
            "span", 
            { id:"sexy-span" ,style : {color : red}}, 
            "Hello I'm a span");
-> 리액트를 이용하면 한 줄만을 이용해서 HTML 요소를 만들고 아이디를 부여하고 값도 지정할 수 있다. 

Vanilla JS : HTML을 먼저 만들고, JS에서 그걸 가져와서 HTML을 수정하는 형식
React JS에서는 반대! -> JS에서 HTML 요소를 만들고 업데이트한다. 

addEventListener를 추가할 필요가 없이 onClick처럼 그냥 props 안에서 추가하면 됨.

------------------
JSX : createElement를 쓰지 않고 컴포넌트를 통해 조금 더 깔끔하게 HTML 요소를 만들 수 있는 문법 
-> React Element를 반환하는 함수

- 브라우저가 우리가 적은 JSX를 이해할 수 있게 바꿔주도록 Babel을 install 해주어야 한다. 
```
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
```

- 한 컴포넌트 안에 다른 컴포넌트를 넣을 수 있다 
``` 
const Container = () => (
        <div>
            <Title /> 
            <Btn />
        </div>
```


