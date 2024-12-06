import logo from './logo.svg';
import './App.css';
import { Nav } from './Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './Home';
import { User } from './User';
import { PageNation } from './PageNation';
function App() {
  return (
    <div className="App">
  
     <BrowserRouter>
     <Routes>

<Route path='/' element={<Home/>}  />
<Route path='/user' element={<User/>}  />
<Route path='/page' element={<PageNation/>}  />
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
