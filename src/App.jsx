import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import About from "./components/About";
import Premium from "./components/Premium";

const App = () => {
  return (
    <div data-theme="mytheme"
      className="min-h-screen bg-gradient-to-br from-[#020013] via-cyan-500/10 to-[#020013] text-base-content ">
      
      <BrowserRouter basename="/">
        <Routes>
          <Route  path="/" element={<Body />} >
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/premium" element={<Premium/>} />
            
          </Route>
        </Routes>
      </BrowserRouter>



    </div>
  )
}

export default App;

