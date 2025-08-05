// 가져오기(import)
// import './경로/파일명';
// import 컴포넌트명 from '파일명(모듈명)'
// 확장자 생략 가능

// react 모듈(폴더)에서 export된 항목을 React라는 이름으로 가져옴
import React from 'react'; // 엄격모드일때 써야함 <React.StrictMode></React.StrictMode>
import ReactDOM from 'react-dom/client';

// ./App.js App.js 파일에서 export된 항목을 App(컨포넌트) 이름으로 가져옴
import App from './App';
// ./reportWebVitals.js 앱 성능 측정 메서드
// import reportWebVitals from './reportWebVitals';
import './index.css';

// 리액트 17버전
// ReactDOM.render(컴포넌트명, DOM객체)
// ReactDOM.render(<App/>, document.getElementById('root'));

// <>~</> => xml 영역
//컴포넌트 / 최상위 부모는 반드시 하나여야 한다.

//리액트 18버전 이후
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // js영역
  <>
    <App />
  </>
);

// <></> 플래그먼트(flagments)태그

// reportWebVitals();
