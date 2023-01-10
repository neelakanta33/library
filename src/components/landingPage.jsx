import { Link } from "react-router-dom";
import '../styles/landingPage.css'


const LandingPage = () => {
  return (
    <div className="landingpage">
      <div className="selectLoginType">
        <h1 id="he">LIBRARY MANAGEMENT SYSTEM</h1>
      <div className="users1">
      <div className="logos">
      <img src={'images/logo2.png'} alt="" height="100px" width="100px"  />
       <img  src={'images/logo1.png'} alt="" height="100px" width="100px" />
     
       </div>
       <div className="user1">
       <Link to='/admin-login' id="admin" >ADMIN LOGIN</Link> 

        <Link to='/user-login' id="user">USER LOGIN</Link>
       </div>
      </div>
      
      </div>
    </div>
  );
};

export default LandingPage;
