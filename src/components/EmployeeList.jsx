import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css"
export const EmployeeList = () => {
  const [emData, setEmData] = useState([]);
  // const { id } = useParams();
 
  const employee = async () => {
    try {
      let res = await fetch(" http://localhost:8080/employee");
      res = await res.json();
      setEmData(res);
      console.log(res);
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    employee();
  }, []);

  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}

      {emData.map((e) => (
        
        <Link className="links" to={`/employee/${e.id}`}>
          <div className="employee_card">
            <img className="employee_image" src={e.image} />
            {/* <span>{e.id}</span> */}
            <span className="employee_name"> {e.employee_name}</span><br />
            <span className="employee_title">{e.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
