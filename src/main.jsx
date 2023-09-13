import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { IssuesContextProvider } from './context/IssuesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <IssuesContextProvider>
            <App />
        </IssuesContextProvider>
    </React.StrictMode>
);
