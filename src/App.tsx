import React from "react";
import {BrowserRouter,Switch,Route}from 'react-router-dom'
import "./App.css";
import { NavBar } from "./components/NavBar";
import { AboutUs } from './pages/AboutUs';
import { TodoPage } from './pages/TodosPage';

const App: React.FC = () => {
 
  return (
    
    <BrowserRouter>
      <NavBar />
      <Switch>
       <Route component={TodoPage} path='/' exact/>
       <Route component={AboutUs} path='/about' exact/>
      </Switch>
      </BrowserRouter>
    
  );
};

export default App;
