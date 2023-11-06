import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5550/user")
      .then((result) => setUsers(result.data))
      .catch((err) => err);
  }, []);

  console.log(users);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5550/delete/" + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    window.location.reload();
  };
  return (
    <>
      <div className="d-flex vh-100 justify-content-center align-items-center backg">
        <div className="w-50 bg-white rounded p-3 boxShadow">
          <Link to="/create" className="btn btn-success">
            Add
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.length > 0 &&
                users.map((users) => {
                  return (
                    <tr>
                      <td>{users.username}</td>
                      <td>{users.email}</td>
                      <td>{users.age}</td>
                      <td>{users.location}</td>
                      <td>
                        <button className="btn btn-success">
                          <Link
                            to={`/update/${users._id}`}
                            className="text-decoration-none btn-success text-white"
                          >
                            Update
                          </Link>
                        </button>{" "}
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(users._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Users;
