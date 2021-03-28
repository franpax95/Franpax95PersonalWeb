import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { SettingsProvider } from './contexts/SettingsContext';
import GlobalStyle from './styles/GlobalStyle';
import App from './components/App';


ReactDOM.render(
    <React.StrictMode>
        <SettingsProvider>
            <BrowserRouter>
                <GlobalStyle />
                <App />
            </BrowserRouter>
        </SettingsProvider>
    </React.StrictMode>
    , document.getElementById('app')
);
