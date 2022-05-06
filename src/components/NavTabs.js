import React from 'react';
import {useNavigate} from 'react-router-dom'


function NavTabs({ currentPage }) {
  const navigate = useNavigate();
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
         
          onClick={() => navigate('/')}
  

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      
      <li className="nav-item">
        <a
        
          onClick={() => navigate('/portfolio')}
       

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
         Portfolio
        </a>
      </li>

      <li className="nav-item">
        <a
        
   

          onClick={() => navigate('/resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>

      {/* <li className="nav-item">
        <a
          


          onClick={() => navigate('/contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li> */}
    </ul>
  );
}

export default NavTabs;
