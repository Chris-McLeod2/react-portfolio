import React from 'react';


function Footer() {   
    return (
    <footer className="footer bg-dark fixed-bottom">
        <a href="https://github.com/Chris-McLeod2"><img src={require("../../assets/images/Github.png")} alt="Github" className="footerimg"/></a>
        <a href="https://www.linkedin.com/in/chris-mcleod-a23ba2101/"><img src={require('../../assets/images/LinkedIn.png')} alt="LinkedIn" className="footerimg"/>  </a>
    </footer>
    )
}

export default Footer;