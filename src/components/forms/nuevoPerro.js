import AppHeader from "../appComponents/appHeader";
import React from "react";
import { useHistory } from "react-router";
const { useState, useEffect } = React;

const NuevoPerro = () => {
  let [info, setInfo] = useState({
    nombre: "",
    edad: "",
    raza: "",
    vacuna_antirrabica: "",
    castrado: "",
    chip: "",
  });
  let history = useHistory();

  const postNewDog = async () => {
    let url = "http://localhost:3000/nuevoPerro";
    let response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: window.localStorage.token,
      },
      body: JSON.stringify({
        nombre: info.nombre,
        edad: info.edad,
        raza: info.raza,
        vacuna_antirrabica: info.vacuna_antirrabica,
        castrado: info.castrado,
        chip: info.chip,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      });

    return response;
  };
  const redirect = () => {
    history.push("/homeVeterinario");
  };
  const handleChange = (e) => {
    e.preventDefault();
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await postNewDog();
    redirect();
  };
  return (
    <div>
      <AppHeader />
      <div className="px-2 flex flex-col bg-indigo-300 items-center justify-center pt-5 lg:pt-0">
        <img
          className="w-32 h-32"
          id="logo"
          alt=""
          src="https://pupuphooray.com/wp-content/uploads/2019/03/dog-icon.png"
        />
      </div>
      <div className="flex justify-center font-nunito items-center  w-full bg-indigo-300">
        <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
          <h1 className="block w-full text-center text-indigo-800 text-2xl font-bold mb-6 uppercase">
            Agregar Nuevo Perro
          </h1>
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-indigo-700"
                for="nombre"
              >
                Nombre:
              </label>
              <input
                className="border py-2 px-3 text-grey-800 row-span-5"
                type="text"
                name="nombre"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-indigo-700"
                for="edad"
              >
                Edad:
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="text"
                name="edad"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-indigo-700"
                for="raza"
              >
                Raza:
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="text"
                name="raza"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-indigo-700"
                for="vacuna_antirrabica"
              >
                Tiene vacuna antirrabica?
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="text"
                name="vacuna_antirrabica"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-indigo-700"
                for="castrado"
              >
                Esta castrado/a ?
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="text"
                name="castrado"
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-indigo-700"
                for="chip"
              >
                Tiene microchip?
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="text"
                name="chip"
                onChange={handleChange}
              ></input>
            </div>
            <button
              className="block bg-indigo-400 hover:bg-indigo-600 text-white uppercase text-lg mx-auto p-4 rounded"
              type="submit"
            >
              Enviar Solicitud!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NuevoPerro;
