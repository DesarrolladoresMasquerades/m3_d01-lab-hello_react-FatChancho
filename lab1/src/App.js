import logo from './logo.svg';
import './App.css';

// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Gallerylist from './components/Gallerylist';
import Gallery from './components/Gallery';
import imagen1 from './images/3oup3wsg.bmp';
import imagen2 from './images/9l40464u.bmp';
import imagen3 from './images/k3wonett.bmp';
import imagen4 from './images/ljo3g0bk.bmp';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <Gallerylist>
        <Gallery imagen={imagen1} title={'Declarative'} description={'sdasdasasdasdsaasdasdasdasdasdasd'} />
        <Gallery imagen={imagen2} title={'Declarative'} description={'dasasdasdsaadasdasdasdasdasdasdasd'} />
        <Gallery imagen={imagen3} title={'Declarative'} description={'dasdasdasdasdsdasdasdasdasdasdasdasd'} />
        <Gallery imagen={imagen4} title={'Declarative'} description={'dsaadasdasdasdasdasdasdasdasdasdasd'} />
      </Gallerylist>
      
     

    </div>

  );
}
export default App;