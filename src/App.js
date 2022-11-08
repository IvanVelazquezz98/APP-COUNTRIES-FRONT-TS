import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./Components/Home/index"
import './App.css';



const App= (props) => {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}



export default App;