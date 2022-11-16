import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../Atoms/Button";

const LoginForm = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let { username, password } = input;
    if ((username === "admin") & (password === "admin")) {
      let token = 12345;
      localStorage.setItem("token", token);
      localStorage.setItem("isAdmin", true);

      navigate("/home");
    } else {
      axios
        .post(`https://fakestoreapi.com/auth/login`, { username, password })
        .then((res) => {
          let { token } = res.data;

          localStorage.setItem("token", token);
          console.log("login berhasil dengan token: ", token);
          navigate("/home");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };
  return (
    <>
      <div className="hero h-full m-auto mt-28">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  value={input.username}
                  onChange={handleInput}
                  type={"text"}
                  name="username"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  value={input.password}
                  onChange={handleInput}
                  type={"password"}
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <Button type={"submit"} buttonPrimary isFullWidth>
                  Login
                </Button>
              </div>
              <div className="text-center">
                <h2 className="text-center text-primary text-xl font-semibold">
                  Belanjapedia
                </h2>
              </div>
            </form>
          </div>
          <div className="text-center lg:text-left mr-64">
            <h1 className="text-5xl font-bold text-primary">Belanjapedia</h1>
            <p className="py-6 text-xl">Belanja apapun dan Dimanapun</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
