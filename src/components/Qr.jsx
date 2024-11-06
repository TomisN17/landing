import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link,} from 'react-router-dom';
import QRimage from '../pages/Qr';
const Qr = () => {
  return (

    <Router>
        <section id="Qr" className="Qr centered-section section">
          <h2>¿Quieres saber más?</h2>
          <p>A continuacion le facilitamos la primera version de Mesi.</p>
          <button><Link to="/QRimage">QR</Link></button>

          <Routes>
        <Route path="/Qrimage" element={<QRimage />} />
          </Routes>
  
        </section>
    </Router>
  );
};

export default Qr;