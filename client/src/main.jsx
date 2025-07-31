import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import { ToastProvider } from "./components/ToastContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastProvider>
      <App/>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);
