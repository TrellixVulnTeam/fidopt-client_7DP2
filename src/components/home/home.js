import { Link } from "react-router-dom";
import Header from "../appComponents/header";
import "./home.css";

const Home = () => {
  return (
    <div className="container-fluid text-center font-caveat">
      <Header />
      <h1 className="py-10 font-caveat text-5xl text-indigo-700">
        Bienvenido a Fidopt !
      </h1>
      <div className="text-2xl px-20 text-center font-nunito grid lg:grid-cols-3 md:grid-cols-3 gap-x-2 sm:grid-cols-1">
        <div>
          <h2 className="text-indigo-600">QUIENES SOMOS</h2>
          <p className="text-base py-3 text-gray-500 flex flex-col">
            Amantes de perros. Veterinarios. Gente que quiere ayudar.
          </p>
        </div>
        <div>
          <h2  className="text-indigo-600">QUE HACEMOS</h2>
          <p className="text-base py-3 text-gray-500 flex flex-col">
            Conectamos a amantes de perros con su proximo perro. Ayudamos a los
            veterinarios
          </p>
        </div>
        <div>
          <h2  className="text-indigo-600">SER UN FIDOPTER</h2>
          <p className="text-base py-3 text-gray-500 flex flex-col">
            Simplemente, apuntate aqui abajo, o ingresa a tu cuenta, y ya seras
            un Fidopter!
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-x-2 sm:grid-cols-1 text-xl px-20">
        <Link
          className="h-10 px-2 py-1 text-center bg-indigo-700 rounded mt-2 text-white focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
          to="/loginVet"
        >
          Soy Veterinario
        </Link>
        <Link
          className="h-10 py-1 justify-items-center px-2 text-center bg-indigo-700 text-white rounded mt-2  focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
          to="/signup"
        >
          Sign Up
        </Link>

        <Link
          className="h-10 px-2 py-1 text-center bg-indigo-700 rounded mt-2 text-white focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
          to="/loginUsuario"
        >
          No soy veterinario
        </Link>
      </div>
    </div>
  );
};

export default Home;
