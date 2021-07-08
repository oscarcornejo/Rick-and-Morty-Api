import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import DetallePersonaje from "./pages/DetailCharacter/DetailCharacter";

function App() {
  return (
    <>
      <Navbar title="Rick & Morty" />

      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/personaje/:id" component={DetallePersonaje} exact />
        </Switch>
      </main>
    </>
  );
}

export default App;
