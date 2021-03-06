import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './components/TodoContainer';
import "./App.css"

ReactDOM.render(
    // StrictMode for debugging?
    <React.StrictMode>
        <TodoContainer />
    </React.StrictMode>,
    document.getElementById("root")
);
