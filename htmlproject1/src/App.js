
import { Routes, Route } from 'react-router-dom';
import './App.css';

import ContactPage from './Pages/ContactPage';
import CarBreezyPage from './Pages/CarBreezyPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/contact' element={<ContactPage></ContactPage>}>
        
        </Route>
        <Route path='/offer' element={<CarBreezyPage></CarBreezyPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
