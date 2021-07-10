import React from "react";
import { Link } from "react-router-dom";
const useState = React.useState;

const SignUp = () => {
  let [info, setInfo] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    let value = event.target.value;
    setInfo({
      fullname: value,
      email: value,
      password: value,
    });
  };
  return (
    <div>
        {console.log(info)}
      <h1 className="text-center">Sign up for an account</h1>
      <div className="form">
        <form>
          <div className="mb-3">
            <label for="exampleInputName1" className="form-label">
              Full Name
            </label>
            <input
              name="fullname"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="d-grid gap-2 col-3 mx-auto">
            <button type="submit" className="btn btn-secondary">
              Submit
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

export default SignUp;
