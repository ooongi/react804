import { createContext, useContext } from "react";
import "./style.css";

const themeDefault = {
    border: "10px solid red"
};

const themeContext = createContext(themeDefault);

export default function App() {
    return (
        <div className="root">
            <h1>hello world!</h1>
            <Sub1 />
        </div>
    );
}

function Sub1() {
    const theme = useContext(themeContext);
    return (
        <div style={theme}>
            <h1>Sub1</h1>
            <Sub2 />
        </div>
    );
}

function Sub2() {
    const theme = useContext(themeContext);
    return (
        <div style={theme}>
            <h1>Sub2</h1>
            <Sub3 />
        </div>
    );
}

function Sub3() {
    const theme = useContext(themeContext);
    return (
        <div style={theme}>
            <h1>Sub3</h1>
            <Sub3 />
        </div>
    );
}
