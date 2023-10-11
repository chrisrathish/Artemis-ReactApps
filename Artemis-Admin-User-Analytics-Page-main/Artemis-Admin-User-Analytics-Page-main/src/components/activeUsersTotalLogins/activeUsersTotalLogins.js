import React from 'react';
import './activeUsersTotalLogins.css';
import activeUsersIcon from './person-profile-icon 1.svg'

export class ActiveUsersTotalLogins extends React.Component 
{
  render() 
  {
    let totalUsers = 79;
    let totalLogins = 48;
    return (
        <div>
          <h2 class="activeUsersCount">{totalUsers}</h2>
          <img class="activeUsersIcon" src={activeUsersIcon}></img>
          <h3 class="activeUsers">Total Users</h3>
          <h2 class="totalLoginCount">{totalLogins}</h2>
          <h3 class="totalLogins">Total Logins</h3>
        </div>
    );
  }
}

export default ActiveUsersTotalLogins;