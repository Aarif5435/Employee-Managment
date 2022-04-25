import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css"
export const EmployeeDetails = () => {
  const { id } = useParams();
  console.log(id)
  const [employee, setEmployee] = useState([])
  
  useEffect(()=>{
    try{
      axios(` http://localhost:8080/employee/${id}`).then(({data})=>{
        console.log(data.id);
        setEmployee(data)
      })
    }catch(err){
      console.log(err)
    }
   
  },[])
  return (
    <div className="user_details">
      <img className="user_image" src={employee.image}/>
      <h4 className="user_name">{employee.username}</h4>
      <span className="user_salary">${employee.salary}</span>
      <span className="tasks">
        <li className="task">{employee.tasks}</li>
      </span>
      Status: <b className="status">{employee.status}</b><br />
      Title: <b className="title">{employee.title}</b><br />
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button><br />
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
