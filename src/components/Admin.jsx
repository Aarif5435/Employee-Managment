import { useContext, useState } from "react";
import { TotalContext } from "../context/TotalNew";

export const Admin = () => {
  const [formData,setFormData] = useState([]);
  const [newe, setNewe] = useState(0);
  const {handleTotal} = useContext(TotalContext)

  const handle = (e)=>{
    const {name,value} = e.target;
    setFormData({
        ...formData,
        [name] : value,
    })
  }

  const onsubmit = (e)=>{
    e.preventDefault();
     fetch('http://localhost:8080/employee',{
      method : "POST",
            headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(formData)
     });
     handleTotal(1);
  }
  return (
    <form className="createEmployee" onSubmit={onsubmit}>
      <input onChange={handle} type="text" placeholder="Employee Name" name="employee_name" /><br />
      <input onChange={handle} type="text" placeholder="Employee id" name="employee_id" /><br />
      <select onChange={handle} name="title"><br />
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select><br />
      <input onChange={handle} type="number" placeholder="Salary" name="salary" /><br />
      <input onChange={handle} type="text" placeholder="Image" name="image" /><br />
      <input onChange={handle} type="text" placeholder="User Name" name="username" /><br />
      <input onChange={handle} type="password" placeholder="Password" name="password" /><br />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
      /><br />
      <select onChange={handle} name="status" id="status">
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select><br />
      <select onChange={handle} name="team" id="team">
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select><br />
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
