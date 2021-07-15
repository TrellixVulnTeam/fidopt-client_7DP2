import {Link} from "react-router-dom";
import "./home.css"


const Home = () => {
  return (
    <div className="container-fluid text-center">
      <h1>Home</h1>
      <div className="button-container d-flex justify-content-evenly">
      <Link className="btn btn-secondary"to="/signup">Sign Up</Link>
      <Link className="btn btn-secondary"to="/loginVet" >Soy Veterinario</Link>
      <Link className="btn btn-secondary"to="/loginUsuario" >No soy veterinario</Link>
      </div>
    </div>
  )
}

export default Home;
