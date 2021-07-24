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
      className="bg-gray-300 dark:bg-gray-900 py-6 sm:py-2"
      key={`perro-container-${perro._id}`}
    >
      <div className="px-20">
        <div className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-2 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
          <img
            src={`https://source.unsplash.com/100x100?${perro.raza}`}
            alt="user"
            className="w-20 h-14 rounded-md"
          ></img>
          <div className="flex flex-col justify-center">
            <h5
              key={`perro-id-${perro._id}`}
              className="text-gray-900 dark:text-gray-300 font-semibold"
            >
              <Link to={`/perro/${perro._id}`}>{perro.nombre}</Link>
            </h5>
            <p
              key={`perro-raza-${perro._id}`}
              className="text-gray-500 text-justify text-sm font-semibold"
            >
              {perro.raza}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleDogComponent;
