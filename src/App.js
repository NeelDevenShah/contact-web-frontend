import './App.css';
import Main from './component/Main_page';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Navbar from './component/common/Navbar';
import About_main from './component/About_main';
import Login_page from './component/Login_page';
import Signup_page from './component/Signup_page';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path='/about' element={<About_main/>}/>
        <Route exact path='/login' element={<Login_page/>}/>
        <Route exact path='/signup' element={<Signup_page/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
