import { HashRouter, Route, Routes } from "react-router-dom";
import Container from "./pages/Container";
import ListItems from "./pages/List-items";
import { getStorage, saveStorage } from "./helpers/handleLocalStorage";
import RegisterItem from "./pages/Register-Item";
import EditItem from "./pages/Edit-Item";

function App() {
  if (!getStorage('unistorage')) {
    saveStorage('unistorage', [])
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Container /> }> 
          <Route path="/" element={<ListItems />} />
          <Route path="/cadastrar-item" element={<RegisterItem />} />
          <Route path="/editar-item/:id" element={<EditItem />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
