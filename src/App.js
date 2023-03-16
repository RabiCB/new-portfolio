import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './Components/About';
import Footer from "./Components/Footer";
import Home from './Components/Home';
import Navigationbar from './Components/Navigationbar';
function App() {
  return (
    <BrowserRouter>
    <Navigationbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/about/:supage?" element={<About/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
