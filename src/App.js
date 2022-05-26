import Homepage from "./components/Homepage";
import RegisterComponent from "./components/RegisterComponent.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NavbarComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        {/* <Route path='/login' element={}/> */}
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
