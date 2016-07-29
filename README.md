# react-test

## 생성방법
    > npm install -g create-react-app
    > npm create-react-app 앱이름
    > cd 앱이름
    > npm run eject (선택사항)
    > npm start

## 실행방법
    > git clone https://github.com/1004w455/react.git
    > cd 앱이름
    > npm install
    > npm start

### hot module 적용
    <!--index.js 파일수정--!>
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
