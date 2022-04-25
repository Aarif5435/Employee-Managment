import { useContext, useEffect, useState } from "react";
import { TotalContext } from "../context/TotalNew";
import "./style.css"

export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created
  const [totalData, setTotalData] = useState(0);
  const [terminated , setTerminated] = useState(0);
  const [promoted , setPromoted] = useState(0);
  const [newe, setNewe] = useState(0);
  const {total} = useContext(TotalContext)

  useEffect(() => {
    const total = async () => {
      let res = await fetch("http://localhost:8080/employee");
      let data = await res.json();
      setTotalData(data.length);
      console.log(data.employee)
    };

    total();
  }, []);

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees:-   <span className="totalemp">{totalData}</span>
        </div>
        <div>
          Total Terminated:- <span className="total_terminated">{terminated}</span>
        </div>
        <div>
          Total Promoted:- <span className="total_promoted">{promoted}</span>
        </div>
        <div>
          Total New:- <span className="total_new">{total}</span>
        </div>
      </div>
    </>
  );
};
