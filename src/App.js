import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboards from './Dashboards/Dashboards';
import Form from './Form';
// import Cart from './Home/Cart';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboards></Dashboards>}></Route>
        {/* <Route path='/cart' element={<Cart></Cart>}></Route> */}
        <Route path='form' element={<Form></Form>}></Route>
      </Routes>
    </div>
  );
}

export default App;
