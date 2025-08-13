import styled from "styled-components";
import "./App.css";

// 컴포넌트 생성+스타일 지정
// const 컴포넌트명 = styled.태그명`css스타일`;
const StyledButton = styled.button`
    color: white;
    background-color: purple;
`;

const LargeButton = styled(StyledButton)`
    font-size: 50px;
`;

const ReactButton = (props) => {
    // console.log(props);
    const style = {
        color: "white",
        backgroundColor: "purple",
    };

    return (
        <button className={props.className} style={style}>
            {props.children}
        </button>
    );
};

const ReactLargeButton = styled(ReactButton)`
    font-size: 50px;
`;

const PrimaryButton = styled.button`
    color: ${props => props.primary ? 'white' : 'black'};
    background-color: ${props => props.primary ? 'blue' : 'gray'};
`;

function App() {
    return (
        <div>
            Hello~
            <ReactButton>React</ReactButton>
            <StyledButton>Styled</StyledButton>
            <LargeButton>Large</LargeButton>
            <ReactLargeButton>ReactLarge</ReactLargeButton>
            <PrimaryButton>Normal</PrimaryButton>
            <PrimaryButton primary>Primary</PrimaryButton>
        </div>
    );
}

export default App;
