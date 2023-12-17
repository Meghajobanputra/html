import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
var output = <div className='container'>
  
  <div className='row mt-5'>
  <div className='col-4'>
  <div className='card shadow'>
  <div className='card-header'><li><b>North Indian</b> </li></div>
  <div className='card-body'>
  <ul>
      <li>Butter Chicken</li>
      <li>Palak Paneer</li>
      <li>Tandoori Chicken</li>
      <li>Dal Makhani</li>
      <li>Aloo Gobi</li>
    </ul>
  </div>
  </div>
  </div>
  <div className='col-4 mb-3'>
  <div className='card shadow'>
  <div className='card-header'><li><b>South Indian</b> </li></div>
  <div className='card-body'>
  <ul>
      <li>Dosa</li>
      <li>Idli</li>
      <li>Vada</li>
      <li>Sambar</li>
      <li>Rasam</li>
    </ul>
  </div>
  </div>
  </div>
  <div className='col-4 mb-3'>
  <div className='card shadow'>
  <div className='card-header'><li><b>Mughlai</b> </li></div>
  <div className='card-body'>
  <ul>
  <li>Biryani</li>
      <li>Korma</li>
      <li>Kebabs</li>
      <li>Naan</li>
      <li>Sheer Khurma</li>
    </ul>
  </div>
  </div>
  </div>
  </div>
  <div className='row mt-5'>
  <div className='col-4 mb-3'>
  <div className='card shadow'>
  <div className='card-header'><li><b>Gujarati</b> </li></div>
  <div className='card-body'>
  <ul>
  <li>Dhokla</li>
      <li>Thepla</li>
      <li>Undhiyu</li>
      <li>Khandvi</li>
      <li>Gulab Jamun</li>
    </ul>
  </div>
  </div>
  </div>
  <div className='col-4 mb-3'>
  <div className='card shadow'>
  <div className='card-header'><li><b>Punjabi</b> </li></div>
  <div className='card-body'>
  <ul>
      <li>Dal Makhani</li>
      <li>Sarson da Saag</li>
      <li>Makke di Roti</li>
      <li>Chole Bhature</li>
      <li>Kada Prashad</li>
    </ul>
  </div>
  </div>
  </div>
  </div>
  </div>

root.render(output);