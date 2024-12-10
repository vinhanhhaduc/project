
import { Routes, Route } from 'react-router-dom';
import './App.css';

import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/contact' element={<ContactPage></ContactPage>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
