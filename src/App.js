import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';

import {Home} from './components/Home';
import { Header }from './components/Header';
import {About} from './components/About';
import {Contact} from './components/Contact'
import { Footer } from './components/Footer';
import {Donate} from './components/Donate'
import {Gallary} from './components/Gallary'
import { Whoweare } from './components/Whoweare';
import { Initiatives1 } from './components/Initiatives1';
import { Initiatives2 } from './components/Initiatives2';
import { Initiatives3 } from './components/Initiatives3';
import { Vision } from './components/Vision&mission';

function App() {
  
 return (
   
    <Router>
      <Header/>
     
      <Routes>
        <Route exact path='/' element={<Home />}/>
        
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/contact' element={<Contact />}/>
        <Route exact path='/donate' element={<Donate />}/>
        <Route exact path='/gallary' element={<Gallary />}/>
        <Route exact path='/whoweare' element={<Whoweare />}/>
        <Route exact path='/Initiatives1' element={<Initiatives1 />}/>
        <Route exact path='/Initiatives2' element={<Initiatives2 />}/>
        <Route exact path='/Initiatives3' element={<Initiatives3 />}/>
        <Route exact path='/vision' element={<Vision />}/>
      </Routes>
      
      <Footer/>
    </Router>
  )
}
export default App;