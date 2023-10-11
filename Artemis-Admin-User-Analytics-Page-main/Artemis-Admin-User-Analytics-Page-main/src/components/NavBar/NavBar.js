import React from 'react';
import './NavBar.css';
import artemisLogo from './artemisLogo.svg'

export class NavBar extends React.Component 
{
  render() 
  {
    const pages = ['Home', 'Analytics'];
    const navLinks = pages.map(page => 
        {
      return (
            <a class="NavBar" href={'/' + page}>
            {page}
            </a>
      )
    });

    return (
        <div>
          <div><img class="Logo" src={artemisLogo}></img></div>
          <div><span class="Artemis">/Artemis</span></div>
          <div><span class="Admin">Admin</span></div>
          <div><a href="https://artemis-dev.systematrix.ai/userAnalytics/" class="userAnalytics">User Analytics</a></div>
          <div><a href="https://artemis-dev.systematrix.ai/dataAnalytics/" class="dataAnalytics">Data Analytics</a></div>
        </div>
    );
  }
}

export default NavBar;