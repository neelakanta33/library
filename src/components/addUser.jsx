import { useState } from "react";
import "../styles/addUser.css";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
  let handleSubmit = (e) => {
    e.preventDefault(); //to prevent reloading
    let data = { name, age, email, phoneNumber };
    fetch("http://localhost:1006/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("data added to json successfully.........!!");
    navigate("/admin/user-list");
  };
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let newValue = (e) => {
    setName(e.target.value);
  };
  let [age, setAge] = useState("");
  let newValue1 = (e) => {
    setAge(e.target.value);
  };
  let [email, setEmail] = useState("");
  let newValue2 = (e) => {
    setEmail(e.target.value);
  };
  let [phoneNumber, setPhoneNumber] = useState("");
  let newValue3 = (e) => {
    setPhoneNumber(e.target.value);
  };
  let reset = () => {
    setName("");
    setAge("");
    setEmail("");
    setPhoneNumber("");
  };
  return (
    <div className="addUser">
      <h1 id="us">ADD USER:</h1>
      <div className="form3">
        <form action="" onSubmit={handleSubmit}>
          <div className="Name">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              value={name}
              onChange={newValue}
              placeholder="enter name"
            />
          </div>
          <div className="age">
            <label htmlFor="">Age:</label>
            <input
              type="number"
              value={age}
              onChange={newValue1}
              placeholder="enter age"
              min="1"
            />
          </div>
          <div className="email">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              value={email}
              onChange={newValue2}
              placeholder="enter email"
            />
          </div>
          <div className="phoneNumber">
            <label htmlFor="">PhoneNo:</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={newValue3}
              placeholder="enter PhoneNumber"
              minLength="10"
              maxLength="10"
            />
          </div>
          <button type="submit">Add User</button>
          <br />
          <button type="reset" onClick={reset}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
