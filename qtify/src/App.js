import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AlbumsSection from './components/AlbumsSection';
// import SongsSection from './components/SongsSection';

function App() {
 
  
  return (
    <>
    <Navbar />
    <HeroSection />
    <AlbumsSection />
    {/* <SongsSection /> */}
    </>
  );
}

export default App;
