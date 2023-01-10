import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css'

const UserLogin = () => {
  let naviagte = useNavigate();
  let login = () => {
    naviagte("/user/");
  };
  return (
    <div className="userLogin">
      <div className="form1" onSubmit={login}>
        <h1>Login As User</h1>
        <div className="form_input">
          <form action="">
          <label htmlFor="" id="emm">Email:</label>
            <div className="email">
           
              <input type="email" required placeholder="enter your email" />
            </div>
            <label htmlFor="" id="paa">Password:</label>
            <div className="password">
             
              <input
                type="password"
                required
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

export default UserLogin;
