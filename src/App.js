import { Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/forms/login";
import SignUp from "./components/forms/signup";
import HomeUsuario from "./components/session/homeUsuario";
import HomeVeterinario from "./components/session/homeVeterinario";
import Perros from "./components/perros/perros"

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
            return <Perros ></Perros>;
          }}
        />
  
      </Switch>
    </div>
  );
};

export default App;
