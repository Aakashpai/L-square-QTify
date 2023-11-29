import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AlbumsSection from './components/AlbumsSection';
import Footer from './components/Footer';
import FAQ from './components/Faq';
import Songs from './components/Songs';

function App() {
 
  
  return (
    <>
    <Navbar />
    <HeroSection />
    <AlbumsSection />
    <Songs/>
    <FAQ/>
    {/* <Footer/> */}
    </>
  );
}

export default App;
