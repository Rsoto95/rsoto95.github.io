import './App.css';
import { Header } from './Components/Header/header';
import { Videoplayer } from './Components/Videoplayer/videoPlayer';
import { FollowUs } from './Components/FollowUs/followUs';
import { Footer } from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Videoplayer/>
      <FollowUs/>
      <Footer/>
    </div>
  );
}

export default App;
