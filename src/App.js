import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Components/Layouts/Home";
import Navbar from "./Components/Layouts/Navbar";
import About from "./Components/Layouts/About";
import Employees from "./Components/Employees/Employees";
import EmployeesDetails from "./Components/Employees/EmployeesDetails";
import Stocks from "./Components/Stocks/Stocks";
import StockDetails from "./Components/Stocks/StockDetails";

const App = () => {
    return(
      <React.Fragment>
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/employees' element={<Employees/>}/>
                    <Route exact path='/employees/:id' element={<EmployeesDetails/>}/>
                    <Route exact path='/stocks' element={<Stocks/>}/>
                    <Route exact path='/stocks/:id' element={<StockDetails/>}/>
                    <Route exact path='/about' element={<About/>}/>
                </Routes>
            </Router>
      </React.Fragment>
  )
};
export default App;