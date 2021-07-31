import AppHeader from "../appComponents/appHeader";
import React from "react";
import { useHistory, useParams } from "react-router";
const { useState, useEffect } = React;


const MeetingRequest = (props) => {
  const params = useParams();
  let pending = "Pending";
  let { id } = params.id;
  let [info, setInfo] = useState({
    motiveForVisit: "",
    ciudad: "",
    date: "",
    status: pending,
  });
  let history = useHistory();
  
  const postMeetingRequest = async () => {
    let response = await fetch(
      `http://localhost:3000/newMeetingRequest/${id}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: window.localStorage.token,
        },
        body: JSON.stringify({
          motiveForVisit: info.motiveForVisit,
          ciudad: info.ciudad,
          date: info.date,
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
  const redirect = ()=>{
    history.push(`/homeUsuario`)
  }
  const handleChange = (e) => {
    e.preventDefault();
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };
const handleFormSubmit = async (e) =>{
  e.preventDefault();
 await postMeetingRequest();
  redirect();
}
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
    <div className="flex justify-center font-nunito items-center w-full bg-indigo-300">
    <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 className="block w-full text-center text-indigo-800 text-2xl font-bold mb-6 uppercase">Solicita una reunion</h1>
        <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-indigo-700" for="motiveForVisit">Motivo de visita</label>
                <input className="border py-2 px-3 text-grey-800 row-span-5" type="text" name="motiveForVisit" id="first_name" onChange={handleChange}></input>
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-indigo-700" for="ciudad">En que ciudad vives?</label>
                <input className="border py-2 px-3 text-grey-800" type="text" name="ciudad" id="last_name" onChange={handleChange}></input>
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-lg text-indigo-700" for="date">Fecha de visita:</label>
                <input className="border py-2 px-3 text-grey-800" type="date" name="date" id="fecha" onChange={handleChange}></input>
            </div>
            <button className="block bg-indigo-400 hover:bg-indigo-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Enviar Solicitud!</button>
        </form>
    </div>
</div>
  </div>
)
};
export default MeetingRequest;
