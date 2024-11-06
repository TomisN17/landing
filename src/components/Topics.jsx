import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link,} from 'react-router-dom'
import { Topic1, Topic2, Topic3, Topic4 } from '../pages';


function Topics () {
  return (
    <Router >
    <div id='topics' className='topics centered-section section'>
      <h3>Temas que Cubrimos</h3>
      <ul className="topics centered-section section">
        <li><Link to="/Topic1 ">Anatomía y biología humana</Link></li>
        <li><Link to="/Topic2">Identidad de género</Link></li>
        <li><Link to="/Topic3">Consentimiento y relaciones saludables</Link></li>
        <li><Link to="/Topic4">Prevención y autocuidado</Link></li>
      </ul>

      <Routes>
        <Route path="/Topic1" element={<Topic1 />} />
        <Route path="/Topic2" element={<Topic2 />} />
        <Route path="/Topic3" element={<Topic3 />} />
        <Route path="/Topic4" element={<Topic4 />} />
      </Routes>
  
    </div>
      </Router>

  );
};

export default Topics;