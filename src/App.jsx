import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div data-theme="mytheme"
      className="min-h-screen bg-base-100 text-base-content ">
      
      <BrowserRouter basename="/">
        <Routes>
          <Route  path="/" element={<Body />} >
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>



    </div>
  )
}

export default App;

