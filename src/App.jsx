import Header from "./componentes/header"
import ListadoPacientes from "./componentes/listadoPacientes"
import Formulario from "./componentes/formulario";
import Error from "./componentes/Error"


function App() {

  return (
    <>
      <Header/>
      <Formulario/>
      <ListadoPacientes/>      
      <Error/>
    </>
  );
}
export default App
