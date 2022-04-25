import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
// import { ProtectedRoute } from "./components/PrivateRoute";

import {Navbar } from "./components/Navbar"
import { Logout } from "./components/Logout";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css"
import {useEffect} from "react"
import { PrivateCoponents } from "./components/PrivateComponent";

function App() {

  

  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/employee" element={<EmployeeList/>}></Route>
        <Route path="/admin" element={
          <PrivateCoponents>
            <Admin />
          </PrivateCoponents>
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/employee/:id" element={
          <PrivateCoponents>
            <EmployeeDetails/>
          </PrivateCoponents>
        }></Route>
        
         </Routes>
      
    </div>
  );
}

export default App;

