import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import FormPage from "./pages/form/formPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/add" element={<FormPage/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
