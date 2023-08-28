import React, { useState } from "react";

const SigninPage = () => {
  const [susername, setUsername] = useState("");
  const [spassword, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function submitForm(e) {
    e.preventDefault();
    console.log(1);
    console.log(susername, spassword);
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${susername}`,
        password: `${spassword}`
        // susername,
        // spassword
      })
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            localStorage.setItem("token", data.token);
            localStorage.setItem("id", data.id);
            //setLoginStatus(true);
          });
        } else {
          res.json().then((data) => {
            setError(data.error);
          });
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="mainContainer">
      {success ? (
        <h1>This is profile page. we can data also here.</h1>
      ) : (
        <form className="container" onSubmit={submitForm}>
          <p>Welcome back!👋</p>
          <h1>Sign in to your Account</h1>
          <div className="input-div">
            <label className="my-label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="input-div">
            <label className="my-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              // value={spassword}
            />
          </div>
          <div className="btnc">
            <button id="btn">Continue</button>
          </div>
          <div className="ptext">
            <p id="p1">Forget your password?</p>
          </div>

          {success ? (
            <p className="success">{success}</p>
          ) : (
            <p className="error">{error}</p>
          )}

          <div className="ptext">
            <p id="p2">
              Don't have Account? <a href="#">Signup</a>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
export default SigninPage;
