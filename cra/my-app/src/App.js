
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
    <div className="App">
      Hello React!(CRA)
    </div>
  );
}

export default App;
