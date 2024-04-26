
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Movies from './page/Movies';
import Users from './page/Users';
import Navbar from './components/Navbar';
import User from './page/User';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/:idx" element={<About />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<User />} />
        </Routes>
    </div>
  );
}

export default App;
