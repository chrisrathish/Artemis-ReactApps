import React from 'react';
import './usersByOrganization.css';
import briefcaseIcon from './briefcase-line-icon 1.svg'

export class UsersByOrganization extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      data: [{ name: "Discover", count: 65 },
      { name: "MTB", count: 5 },
      { name: "Wells Fargo", count: 1 }],
    };
  }

  render() 
  {
    let maxNum = 0;

    for(let i = 0; i < this.state.data.length; i++) {
    if(this.state.data[i].count > maxNum) 
    {
      maxNum = this.state.data[i].count;
    }
}

    return (
      <div>
        <img class="briefcaseIcon" src={briefcaseIcon}></img>
        <h3 class="usersByOrganization">Users by<br></br>Organization</h3>
        <table class="tableUsersByOrganization">
          {this.state.data.map((val, key) => {
            return (
              <><tr key={key}>
                <td>{val.name}</td>
                <td>{val.count}</td>
              </tr><hr class="percent" style={{width: (val.count / maxNum) * 110 + "%"}}></hr></>
        )
      })}
      </table>
      </div>
    );
  }
}

export default UsersByOrganization;
