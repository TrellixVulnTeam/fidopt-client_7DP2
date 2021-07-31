import { useState } from "react";
import { Link } from "react-router-dom";

const VeterinariosCard = (props) => {
  let vet = props.vet;
  console.log(vet)
  let [veterinario, setVeterinario] = useState({
    id: vet._id,
    nombre: vet.nombre,
    ciudad: vet.ciudad,
    edad: vet.edad,
  });
  const randomNumber = (min,max)=>{
    min = Math.ceil(min)
    max = Math.ceil(max)
    return Math.floor(Math.random()* (max, min +1)) + min
}
  return (
    <div
      className="max-w-xs font-nunito mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 my-3 hover:bg-gray-300 hover:shadow-2xl"
      key={`vet-container-${veterinario._id}`}
    >
        {console.log(veterinario)}
      <img
       src={`https://randomuser.me/api/portraits/men/${randomNumber(10,99)}.jpg`}
        alt="user"
        className="object-cover w-full h-56"
        
      ></img>
      <div className="py-8 text-center">
        <h5
          key={`vet-id-${vet._id}`}
          className="block text-5xl font-bold font-caveat text-indigo-700 dark:text-white my-1"
        >
          <Link to={`/veterinario/${vet._id}`}>{vet.nombre}</Link>
        </h5>
        <p
          key={`vet-id-${vet._id}`}
          className="text-sm text-indigo-400 dark:text-gray-200 "
        >
          {vet.ciudad}
        </p>
      </div>
    </div>
  );
};
export default VeterinariosCard;
