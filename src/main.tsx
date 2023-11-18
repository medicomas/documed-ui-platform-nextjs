import { AppThemeProvider } from './themes/AppThemeProvider';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import React from 'react';
import App from './App';
import './main.css';
import { AppProvider } from './context/AppContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <Provider store={store}>
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
      </Provider>
    </AppProvider>
  </React.StrictMode>,
);
