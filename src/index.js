import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Scale from './Components/Scale/Scale';
import App from './Components/App/App';
import Footer from './Components/Footer/Footer'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Scale />
    <App />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
  
ReactDOM.render(
<React.StrictMode>
    <App />
</React.StrictMode>,
document.getElementById('root')
);
*/