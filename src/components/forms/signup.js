import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
const { useState, useEffect } = React;

const SignUp = () => {
  let [info, setInfo] = useState({
    usuario: "",
    email: "",
    pass: "",
    rol: false,
    ciudad: "",
  });
  let history = useHistory();
  const postSignUp = async () => {
    let responseFromPost = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuario: info.usuario,
        email: info.email,
        pass: info.pass,
        rol: info.rol,
        ciudad: info.ciudad
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

  const handleChange = (event) => {
    event.preventDefault();
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };
  const redirect = () => {
    if (info.rol === true) {
      history.push("/homeVeterinario");
    } else if (info.rol === false) {
      history.push("/homeUsuario");
    }
  };
  const handleCheck = (e) => {
    setInfo({
      ...info,
      rol: e.target.checked,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let token = await postSignUp();
    saveToken(token);
    redirect();
  };

  return (
    <div className="font-nunito">
      <div
        div
        className="m-30 flex flex-col bg-indigo-300 items-center justify-center pt-5 lg:pt-0 "
      >
        <img
          className="w-32 h-32 "
          id="logo"
          alt=""
          src="https://pupuphooray.com/wp-content/uploads/2019/03/dog-icon.png"
        />
      </div>
      <div className="flex justify-center items-center w-full bg-indigo-300 py-50">
        <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
          <h1 className="block w-full text-center text-indigo-800 text-2xl font-bold mb-6 uppercase">
            Crear tu cuenta
          </h1>
          <form onSubmit={handleFormSubmit} className="mt-50 font-nunito">
            <div className="flex flex-col ">
              <label
                className="mb-2 font-bold text-lg text-indigo-700"
                for="usuario"
              >
                Nombre Completo:
              </label>
              <input
                className="border py-2 px-3 text-grey-800 row-span-5"
                type="text"
                name="usuario"
                onChange={handleChange}
              ></input>
            </div>
          
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-indigo-700"
                for="email"
              >
                Email:
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="email"
                name="email"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-indigo-700"
                for="pass"
              >
                Password
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="password"
                name="pass"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col mb-4">
              <label className=" font-bold text-lg text-indigo-700" for="rol">
                Eres veterinario ?
              </label>
              <span className="text-xs text-indigo-300">
                Dejar blanco si no eres veterinario
              </span>
              <div className="flex mt-2">
                <input
                  className="border py-2 px-3 mr-3 border-indigo-300"
                  type="checkbox"
                  name="rol"
                  
                  onChange={handleCheck}
                ></input>
                <span className="text-indigo-500">Si, soy veterinario!</span>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-indigo-700"
                for="ciudad"
              >
                Ciudad
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="text"
                name="ciudad"
                onChange={handleChange}
              ></input>
            </div>

            <button
              className="block bg-indigo-400 hover:bg-indigo-600 text-white uppercase text-lg mx-auto p-4 rounded"
              type="submit"
            >
              Crear Cuenta !
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
