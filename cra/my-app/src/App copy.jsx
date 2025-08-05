import logo from './logo.svg';
import './App.css';


// 16.8 이전
// class type component
// 16.8 이후
// function type component
// 컴포넌트의 첫 글자는 대문자로 쓴다.(관례)
// 파일명은 컴포넌트명과 동일하게 쓴다. (관례)
// 파일 확장자는 *.jsx 또는 *.js 가능

function App() {
  return (
    // jsx 문법
    // 1. 최상위 부모는 1개
    // 2. class를 className으로 쓴다. 속성이다.
    // 3. {표현식}


    // 여긴 자바스크립트 영역
    <div className="App">
      {/* JSX 영역, JSX 주석은 ctrl+/ 또는 shift+alt+a */}
      <header className="App-header">
        {/* {'표현식'} */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
