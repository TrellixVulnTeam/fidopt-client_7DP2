import React from "react";
import AppHeader from "../appComponents/appHeader";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loader from "../appComponents/Loader";
import DogProfile from "../perros/dogProfile";
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
    cargando: true,
  });
  let loading = info.cargando;
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
      cargando: false,
    });
  useEffect(() => {
    fetchPerro();
  }, []);
  if (loading === true) {
    return <Loader />;
  } else if (loading === false) {
    return (
      <div>
        <AppHeader />
        <DogProfile dog={info}/>
      </div>
    );
  }
};
export default Perro;
