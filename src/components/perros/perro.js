import React from "react";
import AppHeader from "../appComponents/appHeader";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const { useState, useEffect } = React;

const Perro = () => {
  let params = useParams();
  let id = params.id;
  let [info, setInfo] = useState({
    id: params.id,
    nombre: "",
    edad: "",
    raza: "",
    vacuna_antirrabica: false,
    chip: "",
    castrado: "",
  });

  const fetchPerro = async () => {
    let url = `http://localhost:3000/perro/${id}`;
    let response = await fetch(url).then((response) => response.json());
    setInformation(response);
  };
  const setInformation = (information) =>
    setInfo({
      nombre: information.nombre,
      edad: information.edad,
      raza: information.raza,
      vacuna_antirrabica: information.vacuna_antirrabica,
      castrado: information.castrado,
      chip: information.chip,
    });
  useEffect(() => {
    fetchPerro();
  }, []);
  return <div>
    <AppHeader />
    <h1 className="text-center">Hello, {info.nombre}</h1>
    <div>
    <h2>About</h2>
    <h4>Edad: {info.edad} años</h4>
    <h4>Raza: {info.raza}</h4>
    <h4>Vacunado: {info.vacuna_antirrabica.toString()}</h4>
    <h4>Castrado: {info.castrado}</h4>
    <h4>Chip: {info.chip}</h4>
    </div>
    <div className="flex flex-row space-between">
      <Link to={`/newAdoptionRequest/${id}`}><p className="px-5">Adoptar</p></Link>
      <Link to={`/newMeetingRequest/${id}`}><p>Conocer</p></Link>
      </div>
  </div>;
};
export default Perro;
