import React, { useReducer, useState } from "react";

export default function App() {
  const [number, setNumber] = useState(1);
  function countReducer(oldCount, action) {
    if(action.type==='UP') {
      return oldCount + action.number;
    } else if (action.type==='DOWN') {
      return oldCount - action.number;
    } else if (action.type==='ZERO') {
      return 0;
    }
  }
  const [count, CountDispatch] = useReducer(countReducer, 0);

    function down() {
        CountDispatch({type: 'DOWN', number: number});
    }
    function zero() {
        CountDispatch({type: 'ZERO', number: number});
    }
    function up() {
        CountDispatch({type: 'UP', number: number});
    }
    function changeNumber(event) {
      setNumber(Number(event.target.value))
    }
    return (
        <div>
            <input type="button" value="-" onClick={down} />
            <input type="button" value="0" onClick={zero} />
            <input type="button" value="+" onClick={up} />
            <input type="text" value={number} onChange={changeNumber} />
            <span>{count}</span>
        </div>
    );
}
