
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './comnponents/Navbar';
import Flip from './comnponents/Flip';
import Home from './comnponents/Home';
import Fivecolomns from './comnponents/Fivecolomns';
import Listingpage from './comnponents/Listingpage';
import Tamplets from './comnponents/Tamplets';
import Otherpages from './comnponents/Otherpages';

function App() {
  return (
    <div className="App">
      <Navbar/>
   <Routes>
    <Route path='/flip' element={<Flip/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/fivecolomns' element={<Fivecolomns/>}/>
    <Route path='/listingpage' element={<Listingpage/>}/>
    <Route path='/Tamplets' element={<Tamplets/>}/>
    <Route path='/otherpages' element={<Otherpages/>}/>
    
   </Routes>
    </div>
  );
}

export default App;
