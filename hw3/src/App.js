

import React from 'react';
import { BrowserRouter as Router, Router, Routes, Route} from 'react-router-dom';

import NavMenu from './Navbar/Nav';
import Home from './Views/Home';
import List from './Views/List';
import Population from './Views/Population';
import Chart from './Views/Chart'

const App =()=>{
  return(
<Router>
  <NavMenu/>

<Routes>
        <Route path="/" element={<Home title="Home Page"/>} />
        <Route path="/List" element={<List title="South America Countries List" />} />
        <Route path="/Population" element={<Population title="South America Population Chart" />} />
        <Route path="/Chart" element={<Chart title="Chart Page"/>} />
      </Routes>
    </Router>
  );
};
export default App;