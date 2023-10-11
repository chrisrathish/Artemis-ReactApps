import React from 'react';
import './table.css';


export class Table extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      startNum: 0,
      endNum: 10
    };
  }

  set = () => 
  {
    let number = parseInt(document.getElementById("itemsDisplayed").value);
    this.setState({endNum: number});
  }

  next = () =>
  {
    if(document.getElementById("itemsDisplayed").value !== "")
    {
      let number = parseInt(document.getElementById("itemsDisplayed").value);
      let startNum = this.state.startNum + number;
      let endNum = this.state.endNum + number;
      this.setState({startNum: startNum});
      this.setState({endNum: endNum});
    }
  }

  previous = () =>
  {
    if((this.state.startNum > 0))
    {
      let number = parseInt(document.getElementById("itemsDisplayed").value);
      let startNum = this.state.startNum - number;
      let endNum = this.state.endNum - number;
      this.setState({startNum: startNum});
      this.setState({endNum: endNum});
    }
  }

  render() 
  {
    
    let data = require('./auth_user_data.json')     

    function getColor(statusColor)
    {
      if (statusColor === 'Active') 
      {
        return '#39D19E';
      } 
      else if (statusColor === 'Idle') 
      {
        return '#F5C32E';
      }
      else 
      {
        return '#FF4C40';
      }
    }

    function search() 
    {
      // Declare variables
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("search");
      filter = input.value.toUpperCase();
      table = document.getElementById("table");
      tr = table.getElementsByTagName("tr");
    
      // Loop through all table rows, and hide those who don't match the search query
      for (i = 0; i < tr.length; i++) 
      {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) 
        {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) 
          {
            tr[i].style.display = "";
          } 
          else 
          {
            tr[i].style.display = "none";
          }
        }
      }
    }

    return (
      <div>
        <input type="text" id="search" name="search" class="search" placeholder="Search by username" onChange={search} onkeypress= "this.onchange();" onpaste= "this.onchange();" oninput= "this.onchange();"></input>
        <table id="table" class="table dataTable">
        <tr class="tr dataTable header">
            <th align="left" class="th dataTable">Username</th>
            <th align="left" class="th dataTable">ID</th>
            <th align="left" class="th dataTable">Organization</th>
            <th align="left" class="th dataTable">Last Login</th>
            <th align="left" class="th dataTable">Email</th>
            <th align="left" class="th dataTable">First Name</th>
            <th align="left" class="th dataTable">Last Name</th>
            <th align="left" class="th dataTable">Date Joined</th>
        </tr>
        <tr class="tr spacing"></tr>
        {data.slice(this.state.startNum, this.state.endNum).map((val, key) => {
            return (
              <><tr key={key} class="tr dataTable">
                  <td align="left">{val.username}</td>
                  <td align="left">{val.id}</td>
                  <td align="left">{val.organization}</td>
                  <td align="left">{val.last_login}</td>
                  <td align="left">{val.email}</td>
                  <td align="left">{val.first_name}</td>
                  <td align="left">{val.last_name}</td>
                  <td align="left">{val.date_joined}</td>
              </tr>
              <tr class="tr spacing"></tr>
              </>
        )
      })}
      <tfoot>
          <tr>
              <td colspan="10">
              <div style={{display: 'flex', gap: '10px', float: 'right'}}>
                <button type="button" class="previous" onClick={this.previous}>Previous</button>
                <button type="button" class="next" onClick={this.next}>Next</button>
              </div>
              </td>
          </tr>
      </tfoot>
      </table>
      <h4 class="showingNumberOfEntries">Showing {this.state.startNum} to {this.state.endNum} of {data.length} entries<input type="text" id="itemsDisplayed" name="itemsDisplayed" class="itemsDisplayed" onChange={this.set} onkeypress= "this.onchange();" onpaste= "this.onchange();" oninput= "this.onchange();"></input></h4>
      </div>
    );
  }
}

export default Table;