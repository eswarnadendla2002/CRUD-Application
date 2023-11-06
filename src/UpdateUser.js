import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5550/updateUser/" + id)
      .then((res) => {
        setUsername(res.data.username);
        setEmail(res.data.email);
        setAge(res.data.age);
        setLocation(res.data.location);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5550/updateUsers/" + id, {
        username,
        email,
        age,
        location,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex vh-100 backg justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3 boxShadow">
          <form onSubmit={Update}>
            <div>
              <h2>Update Details</h2>
            </div>
            <div class="form-group">
              <label for="username">User Name</label>
              <input
                type="username"
                class="form-control"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="age">Age</label>
              <input
                type="number"
                class="form-control"
                id="age"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label for="location">Location</label>
              <input
                type="text"
                class="form-control"
                id="location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </div>
            {/* <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div> */}
            <button type="submit" class="btn btn-primary m-2">
              Update
            </button>
            <button type="submit" class="btn btn-success m-2">
              <Link to="/" className="text-decoration-none text-white">
                Back
              </Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
