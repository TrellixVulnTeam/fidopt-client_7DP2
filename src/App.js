import { Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/forms/login";
import SignUp from "./components/forms/signup";
import HomeUsuario from "./components/session/homeUsuario";
import HomeVeterinario from "./components/session/homeVeterinario";
import Perros from "./components/perros/perros";
import Veterinarios from "./components/veterinarios/veterinarios";
import Usuarios from "./components/usuarios/usuarios"
import Perro from "./components/perros/perro"
import AdoptionRequest from "./components/forms/adoptionRequest"
import MeetingRequest from "./components/forms/meetingRequest"
import NuevoPerro from "./components/forms/nuevoPerro"
const App = () => {
  return (
    
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home></Home>;
          }}
        />
        <Route
          exact
          path="/loginVet"
          render={() => {
            return <Login rol="true"></Login>;
          }}
        />
        <Route
          exact
          path="/loginUsuario"
          render={() => {
            return <Login rol="false"></Login>;
          }}
        />
        <Route
          exact
          path="/signup"
          render={() => {
            return <SignUp></SignUp>;
          }}
        />
        <Route
          exact
          path="/homeUsuario"
          render={() => {
            return <HomeUsuario rol="false"></HomeUsuario>;
          }}
        />
        <Route
          exact
          path="/homeVeterinario"
          render={() => {
            return <HomeVeterinario rol="true"></HomeVeterinario>;
          }}
        />
        <Route
          exact
          path="/perros"
          render={() => {
            return <Perros></Perros>;
          }}
        />
        <Route
          exact
          path="/veterinarios"
          render={() => {
            return <Veterinarios></Veterinarios>;
          }}
        />
        <Route
          exact
          path="/usuarios"
          render={() => {
            return <Usuarios></Usuarios>;
          }}
        />
        <Route
          exact
          path="/logout"
          render={() => {
            window.localStorage.clear()
            return <Home></Home>;
          }}
        />
        <Route
          exact
          path="/perro/:id"
          render={() => {
            return <Perro></Perro>;
          }}
        />
         <Route
          exact
          path="/newAdoptionRequest/:id"
          render={() => {
            return <AdoptionRequest></AdoptionRequest>;
          }}
        />
         <Route
          exact
          path="/newMeetingRequest/:id"
          render={() => {
            return <MeetingRequest></MeetingRequest>;
          }}
        />
        <Route
          exact
          path="/nuevoPerro"
          render={() => {
            return <NuevoPerro></NuevoPerro>;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
