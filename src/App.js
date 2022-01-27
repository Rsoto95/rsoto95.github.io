import "./App.css";
import Header from "./Components/Header/header";
import Videoplayer from "./Components/Videoplayer/videoPlayer";
import { FollowUs } from "./Components/FollowUs/followUs";
import { Footer } from "./Components/Footer/footer";
import { AboutUs } from "./Components/about-us/about-us";
import { Contact } from "./Components/Contact-us/contact-us";

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Videoplayer />
                <FollowUs />
                <Footer />
              </div>
            }
          ></Route>

          <Route
            path="/about-us"
            element={
              <div>
                <Header />
                <AboutUs/>
                <Footer />
              </div>
            }
          ></Route>

          <Route
            path="/videos"
            element={
              <div>
                <Header />
                <Videoplayer />
                <Footer />
              </div>
            }
          ></Route>

          <Route
            path="/contact-us"
            element={
              <div>
                <Header/>
               <Contact/>
               <Footer/>
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
