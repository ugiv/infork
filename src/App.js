import './App.css';
import Home from './screens/home/home';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Login from './screens/login/login';
import Personal from './screens/personal/personal'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/personal' element={<Personal/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
