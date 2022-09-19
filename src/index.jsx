import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import BaseRoute from './routes/BaseRoute';
import AuthProvider from './context/AuthProvider';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/*' element={<BaseRoute/>}/>
        </Routes>
      </AuthProvider>
      <ToastContainer position="top-right"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={true}
        limit={2}
        draggable
        pauseOnHover
        theme='light'
      />
    </BrowserRouter>
  </React.StrictMode>
);


