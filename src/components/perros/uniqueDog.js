import { useState } from "react";

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
    <div className="min-h-screen bg-gray-300 dark:bg-gray-900 py-6 flex flex-col  sm:py-2" key={`perro-container-${perro._id}`}>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
      <div className=" bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
        <img
          src={`https://source.unsplash.com/80x80?${perro.raza}`}
          alt="user"
          className="w-12 h-12 object-cover border-solid rounded-2xl"
        ></img>
        <div className="flex flex-col justify-center">
          <a href="#" className=""></a>
          <h5 key={`perro-id-${perro._id}`} className="text-gray-900 dark:text-gray-300 font-semibold">
            <a href="#" className="profile-link">
              {perro.nombre}
            </a>
          </h5>
          <p key={`perro-raza-${perro._id}`} className="text-black dark:text-gray-100 text-justify font-semibold">{perro.raza}</p>
        </div>
      </div>
      </div>
    </div>
  );
};
export default SingleDogComponent;
