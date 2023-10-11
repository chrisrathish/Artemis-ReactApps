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
      data: [{ name: "email1.com", count: 5 },
      { name: "email2.com", count: 3 },
      { name: "email3.com", count: 1 },
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
        <h3 class="usersByEmail">Users by Email</h3>
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