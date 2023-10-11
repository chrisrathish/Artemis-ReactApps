import React from 'react';
import './usersByEmail.css';
import emailIcon from './Email.svg'

export class UsersByEmail extends React.Component 
{
  constructor(props) 
  {
    super(props);

    this.state = 
    {
      data: [{ name: "Discover", count: 35 },
      { name: "MTB", count: 4 },
      { name: "Sysix", count: 3 },
    ],
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
        <img class="emailIcon" src={emailIcon}></img>
        <h3 class="usersByEmail">Users Active</h3>
        <table class="tableUsersByEmail">
          {this.state.data.map((val, key) => {
            return (
              <><tr key={key}>
                <td>{val.name}</td>
                <td>{val.count}</td>
              </tr><hr class="percent" style={{width: (val.count / maxNum) * 110 + "%"}}></hr>
              </>
        )
      })}
      </table>
      </div>
    );
  }
}

export default UsersByEmail;