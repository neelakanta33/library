import { useState, useEffect } from "react";
import "../styles/userList.css";

const UserList = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
      let fetchData = async () => {
        let response = await fetch("http://localhost:1006/users");
        let data = await response.json();
        setUsers(data);
      };
      fetchData();
    },[users]);

   //delete a book from server
  let remove = (name, id) => {
    fetch(`http://localhost:1006/users/${id}`, {
      method: "DELETE",
    });
    alert(`${name} will be deleted permanently`);
  };
  return (
    <div className="userList">
      
      <h1 id="hea">User List:{users.length}</h1>
      <div className="user_section">
        {users.map((x) => (
          <div className="user">
            <h1>Id:{x.id}</h1>
            <p>
              <b>Name:</b>
              {x.name}
            </p>
            <p>
              <b>Age:</b>
              {x.age}
            </p>
            <p>
              <b>Email:</b>
              {x.email}
            </p>
            <p>
              <b>Phone Number:</b>
              {x.phoneNumber}
            </p>

            <button id="but1" onClick={() => remove(x.name,x.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default UserList;
