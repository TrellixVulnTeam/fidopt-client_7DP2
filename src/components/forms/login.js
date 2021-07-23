import React from "react";
import { Link } from "react-router-dom";
import { useHistory, useEffect } from "react-router";
const useState = React.useState;

const Login = (props) => {
  let [info, setInfo] = useState({
    email: "",
    password: "",
  });
  console.log(props.rol);
  console.log(props.auth);
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
  const saveToken = (obj) => {
    window.localStorage.setItem("token", obj.token);
  };
  const redirect = () => {
    console.log(props.rol);
    if (props.rol === "true") {
      history.push("/homeVeterinario");
    } else if (props.rol === "false") {
      history.push("/homeUsuario");
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
      .then((result) => {})
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
      <h1 style={{background: "linear-gradient(to bottom, #a8c0ff, #4338CA)"}} className="text-center h-32 text-white font-mono text-5xl pt-8">FIDOPT</h1>
      <div className="mx-auto font-nunito font-bold flex justify-center h-full flex-col lg:flex-row">
        <form
          onSubmit={handleFormSubmit}
          className="w-full lg:w-1/2 flex justify-center bg-white dark:bg-gray-900"
        >
          <div className="w-full sm:w-4/6 md:w-3/6 lg:w-2/3 text-gray-800 dark:text-gray-100 mb-12 sm:mb-0 flex flex-col justify-center px-2 sm:px-0">
            <div className="px-2 flex flex-col items-center justify-center pt-12 lg:pt-0">
              <img
                className="w-32 h-32"
                id="logo"
                alt=""
                src="https://pupuphooray.com/wp-content/uploads/2019/03/dog-icon.png"
              />
            </div>
            <div className="mt-8 w-full px-2 sm:px-6">
              <label className="text-lg font-semibold leading-tight">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
                id="exampleInputEmail1"
                onChange={handleChange}
              />
            <div className="flex flex-col mt-5">
              <label className="text-lg font-semibold fleading-tight">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
                id="exampleInputPassword1"
                onChange={handleChange}
              />
            </div>
            </div>
            <div className="">
              <div className="grid grid-flow-col grid-cols-2 gap-1 sm:mb-16 sm:px-6">
                <button
                  type="submit"
                  className="focus:outline-none w-full sm:w-auto bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm mt-6"
                >
                  Submit
                </button>

            <Link type="submit" className="text-center focus:outline-none w-full sm:w-auto bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm mt-6" to="/">
              Go Back
            </Link>
            </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
