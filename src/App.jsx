import MainContainer from './layouts/MainContainer/MainContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainContainer />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
