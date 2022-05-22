import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Poems from "./pages/Poems/Poems";
import Poem from "./components/Poem/Poem";
import Shayaris from "./pages/Shayaris/Shayaris";
import Shayari from "./components/Shayari/Shayari";
import AboutMe from "./pages/AboutMe/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/poems" element={<Poems />} />
        <Route path="/poem/:id" element={<Poem />} />
        <Route path="/shayaris" element={<Shayaris />} />
        <Route path="/shayari/:id" element={<Shayari />} />
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
