import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const CreateUser = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    age: "",
    location: "",
  });
  const { username, email, age, location } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5550/create", data)
      .then((result) => {
        console.log(result);
        setData({
          username: "",
          email: "",
          age: "",
          location: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex vh-100 backg justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3 boxShadow">
          <form onSubmit={submitHandler}>
            <div>
              <h2>Create User</h2>
            </div>
            <div class="form-group">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={changeHandler}
              />
            </div>
            <div class="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={changeHandler}
              />
            </div>
            <div class="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="age"
                name="age"
                class="form-control"
                id="age"
                value={age}
                onChange={changeHandler}
              />
            </div>
            <div class="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                class="form-control"
                id="location"
                value={location}
                onChange={changeHandler}
              />
            </div>
            <button type="submit" class="btn btn-primary m-2">
              Submit
            </button>
            <button type="submit" class="btn btn-success m-2">
              <Link to="/" className="text-decoration-none text-white">
                Home
              </Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
