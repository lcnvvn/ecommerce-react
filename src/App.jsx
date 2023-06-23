import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from "./components/layout/NavBar/NavBar";
import { ItemListContainer } from "./components/pages/ItemList/ItemListContainer";

function App() {
  const greeting = "¡Bienvenido/a! En construcción";
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </div>
  );
}

export default App;
