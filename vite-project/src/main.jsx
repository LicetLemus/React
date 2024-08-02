import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HelloWorldApp } from './HelloWorldApp'
// import { FirstApp } from './FirstApp'
// import { ImpresionVariables } from './impresion-variables.jsx';
// import { Props } from './props.jsx';
import { CounterApp } from './CounterApp.jsx';

// up styles global
import './styles.css'

// for to render the component of HelloWorldApp.jsx
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* {/* <HelloWorldApp/>
        <FirstApp/>
        <ImpresionVariables/>
        <Props/> */}
        <CounterApp value={ 10 }/>

    </React.StrictMode>
)