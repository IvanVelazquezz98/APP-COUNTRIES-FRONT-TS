import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./Components/Home/index"
import './App.css';

interface IAppProps {
  title?: string
}

const App: FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

App.defaultProps = {
  title: 'REACT WITH TYPESCRIPT'
}

export default App;