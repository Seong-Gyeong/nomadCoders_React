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
