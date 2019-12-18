import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar (props) {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark nave-barra-navegacao">
        
            <Link to="/">
              <span className="navbar-brand mb-0 h1">
                <img src="../img/Branco.png" alt="Company Logo"/>
              </span>
            </Link>
        </nav>
      )
  }

  export default NavigationBar;

