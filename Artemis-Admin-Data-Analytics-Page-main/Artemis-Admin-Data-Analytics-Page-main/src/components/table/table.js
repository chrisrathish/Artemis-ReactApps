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
    let data = require('./city_count.json')

    // let data = 
    // [
    //   { id: "#347", city: "San Diego", url: "43354", post: "23455", phone: "76594", email: "64352"},
    //   { id: "#817", city: "Chicago", url: "38354", post: "87435", phone: "62342", email: "23423"},
    //   { id: "#012", city: "Atlanta", url: "32426", post: "56743", phone: "32423", email: "52323"}
    // ]

    function search() 
    {
      // Declare variables
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("search");
      filter = input.value.toUpperCase();
      table = document.getElementById("table");
      tr = table.getElementsByTagName("tr");
    
      // Loop through all table rows, and hide those who don't match the search query
      for (i = 1; i < tr.length; i++) { // Start from index 1 to skip the header row
        td = tr[i].getElementsByTagName("td")[0]; // Assuming you want to search in the first column
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
      }
    }

    return (
      <div>
        <input type="text" id="search" name="search" class="search" placeholder="Search by City" onChange={search} onkeypress= "this.onchange();" onpaste= "this.onchange();" oninput= "this.onchange();"></input>
        <table id="table" class="table dataTable">
        <tr class="tr dataTable header">
            <th align="center" class="th dataTable">City</th>
            <th align="left" class="th dataTable">Date</th>
            <th align="left" class="th dataTable">ADs</th>
            <th align="left" class="th dataTable">Phone</th>
            <th align="left" class="th dataTable">Email</th>
        </tr>
        <tr class="tr spacing"></tr>
        {data.slice(this.state.startNum, this.state.endNum).map((val, key) => {
            return (
              <><tr key={key} class="tr dataTable">
                  <td align="left">{val.city}</td>
                  <td align="left">{val.date}</td>
                  <td align="left">{val.ad_count}</td>
                  <td align="left">{val.phone_count}</td>
                  <td align="left">{val.email_count}</td>

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