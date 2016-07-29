import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const rootEl = document.getElementById('root');

ReactDOM.render(
    <App />,
    rootEl
);

// hot module 적용
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        ReactDOM.render(
            <NextApp />,
            rootEl
        );
    });
}
