import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import {ProductProvider} from './context';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from './components/context/ThemeContexts';




ReactDOM.render(
   
 <ProductProvider>
     <ThemeProvider>
       <Router>
            <App />
           </Router>
  </ThemeProvider>
 </ProductProvider> ,
     document.getElementById('root'));


serviceWorker.unregister();
