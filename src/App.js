import { HashRouter, Route, Routes } from "react-router-dom";
import Container from "./pages/Container";
import RegisterItem from "./pages/Register-Item";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Container /> }> 
          <Route path="/" element={<RegisterItem />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
