import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const DogProfile = (props) => {
  let params = useParams();
  let id = params.id;
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
    <main className="profile-page m-3 font-nunito">
      <section className="relative block shadow-2xl rounded-t bg-indigo-300" style={{ height: "300px" }}>
      </section>
      <section className="relative py-16 rounded-b bg-indigo-400">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src={`https://source.unsplash.com/800x800?${perro.raza}`}
                      className="shadow-xl rounded-full align-middle border-none absolute md:-m-10 sm:-ml-15 lg:-ml-20"
                      style={{ maxWidth: "200px" }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0 sm:px-4 sm:m-2">
                    <Link to={`/newAdoptionRequest/${id}`}
                      className="bg-indigo-500 active:bg-indigo-600 hover:bg-indigo-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      Adoptar
                    </Link>
                    <Link to={`/newMeetingRequest/${id}`}
                      className="bg-indigo-500 active:bg-indigo-600 hover:bg-indigo-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      Conocer
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1 sm:px-4">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {perro.edad}
                      </span>
                      <span className="text-sm text-gray-500">Año(s)</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {perro.castrado}
                      </span>
                      <span className="text-sm text-gray-500">
                        Esta Castrado
                      </span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {perro.chip}
                      </span>
                      <span className="text-sm text-gray-500">Tiene Chip</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-32">
                <h3 className="text-4xl text-indigo-700 font-caveat font-semibold leading-normal mb-2">
                  {perro.nombre}
                </h3>
                <div className="text-xs text-indigo-600 leading-normal mt-0 mb-2 font-bold uppercase">
          
               <span className="px-1">{perro.raza}</span> • <span className="mb-2 text-indigo-400 mt-10 px-1">Adulto</span>
                </div>
                
              
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      {perro.nombre} vivió anteriormente con un perro salchicha y cree
                      que él también es un perro faldero. Como parte de un perro perdiguero, es
                      leal y le gusta quedarse con sus humanos. {perro.nombre} está al
                      día con todas las vacunas y {perro.castrado.toLowerCase()} está castrado. No sabemos cómo
                      le va con los gatos. {perro.nombre} ha vivido anteriormente con
                      niños de 0 a 8 años. No se requiere capacitación, pero se
                      recomienda encarecidamente. {perro.nombre} conoce los comandos
                      básicos y es tan inteligente que cada día aprende más. Es
                      un perro de alta energía que sería un compañero
                      maravilloso para caminar o correr. {perro.nombre} camina bien con
                      una correa, pero aún necesitaría un patio cercado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default DogProfile;
