import './App.css';
import Home from './screens/home/home';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Login from './screens/login/login';
import Personal from './screens/personal/personal'
import Orange from './screens/digitalPage/orange';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/personal' element={<Personal/>} />
          <Route path='/orange' element={<Orange />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
