import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminLogin.css'
const AdminLogin = () => {
  let [email, setEmail] = useState(""); //to add email

  let [password, setPassword] = useState(""); //to add password
  let naviagte = useNavigate(); //to naviagate to different pages
  let login = (e) => {
    e.preventDefault(); //to stop reloding of page
    let data = { email, password }; //data from input
    if (email == "admin@gmail.com" && password == 123) { //admin validation of details
      naviagte("/admin/");
    } else {
      alert("invalid Login credentials");
    }
  };

  return (
    <div className="adminLogin">
      <div className="form" onSubmit={login}>  
        <h1>Login As Admin</h1>
        <div className="form_input">
          <form action="">
          <label htmlFor="" id="em">Email:</label>

            <div className="email">

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter your email"
              />
            </div>
            
            <label htmlFor="" id="pa">Password:</label>
            <div className="password">
           
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="enter your password"
              />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
