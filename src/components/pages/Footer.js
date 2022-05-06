import React from 'react';


function Footer() {   
    return (
    <footer className="footer fixed-bottom">
        <a href="https://github.com/Chris-McLeod2"><img src={require("../../assets/images/Github.jpg")} alt="Github" className="footerimg"/></a>
        <a href="https://www.linkedin.com/in/chris-mcleod-a23ba2101/"><img src={require('../../assets/images/LinkedIn.png')} alt="LinkedIn" className="footerimg"/>  </a>
     
        <a href="mailto:mcleod32@live.com"><img src={require("../../assets/images/Email.png")} alt="Email" className="footerimg"/></a>
      
    </footer>
    )
}

export default Footer;