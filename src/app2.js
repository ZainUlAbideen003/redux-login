import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Welcome from "./components/Welcome";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn/>} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
