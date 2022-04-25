import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";

export const Login = () => {
  //  use reqres to log user in.
  const {setIsAuth,isAuth} = useContext(AuthContext);
  const [data,setData] =useState([]);
  const navigate = useNavigate();
 
  const change = (e)=>{
       const {name,value} = e.target;
       setData({
         ...data,
         [name] : value,
       })
  }


  const handleLogin = async(e)=>{
    e.preventDefault();
    try{
        let res = await fetch("https://reqres.in/api/login",{
          method : "POST",
          headers:{
            "Content-Type" : "application/json",
          },
          body : JSON.stringify(data),
        })
          res = await res.json();
          if(res.token === "QpwL5tke4Pnpja7X4"){
            setIsAuth(true);
            navigate(-2)
          }
          console.log(res);
    }catch(err){
      console.log(err)
    }
  }

  return (
    <form className="loginform" onSubmit={handleLogin}>
      <input
      onChange={change}
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
      onChange={change}
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit"  />
    </form>
  );
};
