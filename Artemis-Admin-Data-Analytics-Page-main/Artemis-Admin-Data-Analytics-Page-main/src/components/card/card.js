import React from 'react';
import './card.css';
import TotalUrlsTotalPostsTotalPhonesTotalEmails from './../totalUrlsTotalPostsTotalPhonesTotalEmails/totalUrlsTotalPostsTotalPhonesTotalEmails';
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
            <h1 class="loginHistory">Data Analytics</h1>
            <hr class="line"></hr>
            <TotalUrlsTotalPostsTotalPhonesTotalEmails />
            
            <Table />
          </div>
        </div>
    );
  }
}

export default Card;