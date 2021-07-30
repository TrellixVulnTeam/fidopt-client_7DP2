import { useState } from "react";
import { Link } from "react-router-dom";

const SingleDogComponent = (props) => {
  let dog = props.dog;
  let [perro, setPerro] = useState({
    _id: dog._id,
    nombre: dog.nombre,
    raza: dog.raza,
    edad: dog.edad,
    castrado: dog.castrado,
    chip: dog.chip,
    vacuna_antirrabica: dog.vacuna_antirrabica,
  });
  return (
    <div
      className="max-w-xs font-nunito mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 my-3 hover:bg-gray-300 hover:shadow-2xl"
      key={`perro-container-${perro._id}`}
    >
      <img
        src={`https://source.unsplash.com/500x400?${perro.raza}`}
        alt="user"
        className="object-cover w-full h-56"
        
      ></img>
      <div className="py-8 text-center">
        <h5
          key={`perro-id-${perro._id}`}
          className="block text-5xl font-bold font-caveat text-indigo-700 dark:text-white my-1"
        >
          <Link to={`/perro/${perro._id}`}>{perro.nombre}</Link>
        </h5>
        <p
          key={`perro-raza-${perro._id}`}
          className="text-sm text-indigo-400 dark:text-gray-200 "
        >
          {perro.raza}
        </p>
      </div>
    </div>
  );
};
export default SingleDogComponent;
