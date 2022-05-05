import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Home, Dashboard, SignIn } from './components';
import './styles.css'
import { theme } from './Theme/themes'
import { ThemeProvider } from '@mui/material/styles';
import { store } from './redux/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store ={store}>
      <ThemeProvider theme = {theme}>
        <Router>
          <Routes>
            <Route path = '/' element={<Home title={'Marvel Inventory'} />} />
            <Route path = '/dashboard' element={ <Dashboard />} />
            <Route path = '/signin' element={<SignIn />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
