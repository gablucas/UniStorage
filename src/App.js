import { HashRouter, Route, Routes } from "react-router-dom";
import Container from "./pages/Container";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Container /> }> 

        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
