import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Greetings from App" />
    </>
  );

};

export default App;