import React from 'react';
import './card.css';
import ActiveUsersTotalLogins from './../activeUsersTotalLogins/activeUsersTotalLogins';
import UsersByEmail from './../usersByEmail/usersByEmail';
import UsersByOrganization from './../usersByOrganization/usersByOrganization';
import Table from './../table/table'
import historyIcon from './history-line-icon 1.svg'

export class Card extends React.Component 
{
  render() 
  {
    return (
        <div>
          <div class="Rectangle1">
            <img class="historyIcon" src={historyIcon}></img>
            <h1 class="loginHistory">Login History</h1>
            <hr class="line"></hr>
            <ActiveUsersTotalLogins />
            <UsersByEmail />
            <UsersByOrganization />
            
            <Table />
          </div>
        </div>
    );
  }
}

export default Card;