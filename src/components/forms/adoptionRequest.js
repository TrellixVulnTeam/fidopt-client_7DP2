import AppHeader from "../appComponents/appHeader";
import React from "react";
import { useHistory, useParams } from "react-router";
const { useState, useEffect } = React;

const AdoptionRequest = (props) => {
  const params = useParams();
  let pending = "Pending";
  let { id } = params.id;
  let [info, setInfo] = useState({
    adoptionReason: "",
    ciudad: "",
    status: pending,
  });

  let history = useHistory();

  const postAdoptionRequest = async () => {
    let response = await fetch(
      `http://localhost:3000/newAdoptionRequest/${id}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adoptionReason: info.adoptionReason,
          ciudad: info.ciudad,
          status: info.status,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
    return response;
  };
  const redirect = () => {
    history.push(`/perro/${id}`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let adoptionRequest = await postAdoptionRequest();
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
    <div className="flex justify-center font-nunito items-center h-screen w-full bg-indigo-300">
    <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 className="block w-full text-center text-indigo-800 text-2xl font-bold mb-6 uppercase">Solicita una adopción</h1>
        <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-indigo-700" for="adoptionReason">Motivo de adopción</label>
                <input className="border py-2 px-3 text-grey-800 row-span-5" type="text" name="adoptionReason" id="adoption_reason"></input>
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-indigo-700" for="ciudad">En que ciudad vives?</label>
                <input className="border py-2 px-3 text-grey-800" type="text" name="ciudad" id="city"></input>
            </div>
            <button className="block bg-indigo-400 hover:bg-indigo-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Enviar Solicitud!</button>
        </form>
    </div>
</div>
  </div>
  )
};

export default AdoptionRequest;
