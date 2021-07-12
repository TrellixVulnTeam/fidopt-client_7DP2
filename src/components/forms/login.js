import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useEffect } from "react-router";
const useState = React.useState;

const Login = (props) => {
  let [info, setInfo] = useState({
    email: "",
    password: "",
  });
  console.log(props.rol)
  console.log(props.auth)
  let history = useHistory();

  const postLogin = async () => {
    let responseFromPost = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: info.email,
        password: info.password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
    return responseFromPost;
  };
  const saveToken = (obj)=>{
    window.localStorage.setItem("token", obj.token)
  }
  const redirect = () => {
    console.log(props.rol)
    if(props.rol == "true"){
    history.push("/homeVeterinario");
  } else if(props.rol == "false") {
    history.push("/homeUsuario")
  }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
    });
  };

  const getResponse = () => {
    fetch("http://localhost:3000/veterinarios")
      .then((res) => res.json())
      .then((result) => {
  
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
   let token = await postLogin();
   saveToken(token);
    redirect();
  };

  return (
    <div>
      <h1 className="text-center">Login</h1>
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChange}
            />
          </div>

          <div className="d-grid gap-2 col-3 mx-auto">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={getResponse}
            >
              Get Response
            </button>
            <Link type="submit" className="btn btn-primary btn-sm" to="/">
              Go Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
