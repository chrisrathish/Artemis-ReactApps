import React, { Component } from 'react';
import './table.css';
import up from './up.png';
// import down from './down.jpg';
import reset from './reset.jpeg';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startNum: 0,
      endNum: 10,
      data: require('./city_count.json'),
      originalData: require('./city_count.json'), // Store the original unsorted data
      sortedColumn: null, // To track the currently sorted column
      sortDirection: 'asc', // To track the sort direction
    };
  }

  set = () => {
    let number = parseInt(document.getElementById("itemsDisplayed").value);
    this.setState({ endNum: number });
  }

  next = () => {
    if (document.getElementById("itemsDisplayed").value !== "") {
      let number = parseInt(document.getElementById("itemsDisplayed").value);
      let startNum = this.state.startNum + number;
      let endNum = this.state.endNum + number;
      this.setState({ startNum: startNum });
      this.setState({ endNum: endNum });
    }
  }

  previous = () => {
    if (this.state.startNum > 0) {
      let number = parseInt(document.getElementById("itemsDisplayed").value);
      let startNum = this.state.startNum - number;
      let endNum = this.state.endNum - number;
      this.setState({ startNum: startNum });
      this.setState({ endNum: endNum });
    }
  }

  // Function to handle sorting
  handleSort = (columnName) => {
    const { sortedColumn, sortDirection, data } = this.state;

    // Toggle sort direction if the same column is clicked
    const newSortDirection = sortedColumn === columnName ? (sortDirection === 'asc' ? 'desc' : 'asc') : 'asc';

    // Sort the data
    const sortedData = [...data].sort((a, b) => {
      if (columnName === 'city') {
        return newSortDirection === 'asc' ? a.city.localeCompare(b.city) : b.city.localeCompare(a.city);
      } else if (columnName === 'date') {
        return newSortDirection === 'asc' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date);
      } else if (columnName === 'ad_count') {
        return newSortDirection === 'asc' ? a.ad_count - b.ad_count : b.ad_count - a.ad_count;
      } else if (columnName === 'phone_count') {
        return newSortDirection === 'asc' ? a.phone_count - b.phone_count : b.phone_count - a.phone_count;
      } else if (columnName === 'email_count') {
        return newSortDirection === 'asc' ? a.email_count - b.email_count : b.email_count - a.email_count;
      }
      return 0;
    });

    this.setState({
      data: sortedData,
      sortedColumn: columnName,
      sortDirection: newSortDirection,
    });
  };

  // Function to reset the sorting for a specific column
  resetSorting = (columnName) => {
    this.setState((prevState) => {
      const originalData = prevState.originalData; // Get the original unsorted data
      return {
        data: [...originalData], // Reset data to the original order
        sortedColumn: null,
        sortDirection: 'asc',
      };
    });
  };

  render() {
    const { data, sortedColumn, sortDirection } = this.state;

    function search() {
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
                  } 
                  else {
                      tr[i].style.display = "none";
                  }
              }
            }
    }
return (
  <div>
    <input
      type="text"
      id="search"
      name="search"
      className="search"
      placeholder="Search by City"
      onChange={search}
    />
    <table id="table" className="table dataTable">
      <tr className="tr dataTable header">
        <th align="center" className="th dataTable">
          City
          <button
            onClick={() => this.handleSort('city')}
            className="sort-button"
            data-sorted={sortedColumn === 'city' ? sortDirection : null}
          >
            <img src={up} alt="Ascending" className="arrow-image" width={13.8} height={14}/>
          </button>
          {/* <button
            onClick={() => this.handleSort('city')}
            className="sort-button"
            data-sorted={sortedColumn === 'city' ? (sortDirection === 'asc' ? 'desc' : 'asc') : null}
          >
            <img src={down} alt="Descending" className="arrow-image" width={13.8}/>
          </button> */}
          <button onClick={() => this.resetSorting('city')} className="reset-button">
            <img src={reset} alt="Reset" className="reset-image" width={13.8}/>
          </button>
        </th>
        <th align="left" className="th dataTable">
          Date
          <button
            onClick={() => this.handleSort('date')}
            className="sort-button"
            data-sorted={sortedColumn === 'date' ? sortDirection : null}
          >
            <img src={up} alt="Ascending" className="arrow-image" width={13.8} height={14}/>
          </button>
          {/* <button
            onClick={() => this.handleSort('date')}
            className="sort-button"
            data-sorted={sortedColumn === 'date' ? (sortDirection === 'asc' ? 'desc' : 'asc') : null}
          >
            <img src={down} alt="Descending" className="arrow-image" width={13.8}/>
          </button> */}
          <button onClick={() => this.resetSorting('date')} className="reset-button">
            <img src={reset} alt="Reset" className="reset-image" width={13.8}/>
          </button>
        </th>
        <th align="left" className="th dataTable">
          ADs
          <button
            onClick={() => this.handleSort('ad_count')}
            className="sort-button"
            data-sorted={sortedColumn === 'ad_count' ? sortDirection : null}
          >
            <img src={up} alt="Ascending" className="arrow-image" width={13.8} height={14}/>
          </button>
          {/* <button
            onClick={() => this.handleSort('ad_count')}
            className="sort-button"
            data-sorted={sortedColumn === 'ad_count' ? (sortDirection === 'asc' ? 'desc' : 'asc') : null}
          >
            <img src={down} alt="Descending" className="arrow-image" width={13.8}/>
          </button> */}
          <button onClick={() => this.resetSorting('ad_count')} className="reset-button">
            <img src={reset} alt="Reset" className="reset-image" width={13.8}/>
          </button>
        </th>
        <th align="left" className="th dataTable">
          Phone
          <button
            onClick={() => this.handleSort('phone_count')}
            className="sort-button"
            data-sorted={sortedColumn === 'phone_count' ? sortDirection : null}
          >
            <img src={up} alt="Ascending" className="arrow-image" width={13.8} height={14}/>
          </button>
          {/* <button
            onClick={() => this.handleSort('phone_count')}
            className="sort-button"
            data-sorted={sortedColumn === 'phone_count' ? (sortDirection === 'asc' ? 'desc' : 'asc') : null}
          >
            <img src={down} alt="Descending" className="arrow-image" width={13.8}/>
          </button> */}
          <button onClick={() => this.resetSorting('phone_count')} className="reset-button">
            <img src={reset} alt="Reset" className="reset-image" width={13.8}/>
          </button>
        </th>
        <th align="left" className="th dataTable">
          Email
          <button
            onClick={() => this.handleSort('email_count')}
            className="sort-button"
            data-sorted={sortedColumn === 'email_count' ? sortDirection : null}
          >
            <img src={up} alt="Ascending" className="arrow-image" width={13.8} height={14}/>
          </button>
          {/* <button
            onClick={() => this.handleSort('email_count')}
            className="sort-button"
            data-sorted={sortedColumn === 'email_count' ? (sortDirection === 'asc' ? 'desc' : 'asc') : null}
          >
            <img src={down} alt="Descending" className="arrow-image" width={13.8}/>
          </button> */}
          <button onClick={() => this.resetSorting('email_count')} className="reset-button">
            <img src={reset} alt="Reset" className="reset-image" width={13.8}/>
          </button>
        </th>
      </tr>
      <tr className="tr spacing"></tr>
      {data.slice(this.state.startNum, this.state.endNum).map((val, key) => {
        return (
          <tr key={key} className="tr dataTable">
            <td align="left">{val.city}</td>
            <td align="left">{val.date}</td>
            <td align="left">{val.ad_count}</td>
            <td align="left">{val.phone_count}</td>
            <td align="left">{val.email_count}</td>
          </tr>
        );
      })}
      <tfoot>
        <tr>
          <td colspan="10">
            <div style={{ display: 'flex', gap: '10px', float: 'right' }}>
              <button type="button" className="previous" onClick={this.previous}>
                Previous
              </button>
              <button type="button" className="next" onClick={this.next}>
                Next
              </button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
    <h4 className="showingNumberOfEntries">
      Showing {this.state.startNum} to {this.state.endNum} of {data.length} entries
      <input
        type="text"
        id="itemsDisplayed"
        name="itemsDisplayed"
        className="itemsDisplayed"
        onChange={this.set}
      />
    </h4>
  </div>
);
}
}

export default Table;

// import React from 'react';
// import './table.css';


// export class Table extends React.Component 
// {
//   constructor(props) 
//   {
//     super(props);
//     this.state = 
//     {
//       startNum: 0,
//       endNum: 10
//     };
//   }

//   set = () => 
//   {
//     let number = parseInt(document.getElementById("itemsDisplayed").value);
//     this.setState({endNum: number});
//   }

//   next = () =>
//   {
//     if(document.getElementById("itemsDisplayed").value !== "")
//     {
//       let number = parseInt(document.getElementById("itemsDisplayed").value);
//       let startNum = this.state.startNum + number;
//       let endNum = this.state.endNum + number;
//       this.setState({startNum: startNum});
//       this.setState({endNum: endNum});
//     }
//   }

//   previous = () =>
//   {
//     if((this.state.startNum > 0))
//     {
//       let number = parseInt(document.getElementById("itemsDisplayed").value);
//       let startNum = this.state.startNum - number;
//       let endNum = this.state.endNum - number;
//       this.setState({startNum: startNum});
//       this.setState({endNum: endNum});
//     }
//   }

//   render() 
//   {
//     let data = require('./city_count.json')

//     // let data = 
//     // [
//     //   { id: "#347", city: "San Diego", url: "43354", post: "23455", phone: "76594", email: "64352"},
//     //   { id: "#817", city: "Chicago", url: "38354", post: "87435", phone: "62342", email: "23423"},
//     //   { id: "#012", city: "Atlanta", url: "32426", post: "56743", phone: "32423", email: "52323"}
//     // ]

//     function search() 
//     {
//       // Declare variables
//       var input, filter, table, tr, td, i, txtValue;
//       input = document.getElementById("search");
//       filter = input.value.toUpperCase();
//       table = document.getElementById("table");
//       tr = table.getElementsByTagName("tr");
    
//       // Loop through all table rows, and hide those who don't match the search query
//       for (i = 1; i < tr.length; i++) { // Start from index 1 to skip the header row
//         td = tr[i].getElementsByTagName("td")[0]; // Assuming you want to search in the first column
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//       }
//     }

//     return (
//       <div>
//         <input type="text" id="search" name="search" class="search" placeholder="Search by City" onChange={search} onkeypress= "this.onchange();" onpaste= "this.onchange();" oninput= "this.onchange();"></input>
//         <table id="table" class="table dataTable">
//         <tr class="tr dataTable header">
//             <th align="center" class="th dataTable">City</th>
//             <th align="left" class="th dataTable">Date</th>
//             <th align="left" class="th dataTable">ADs</th>
//             <th align="left" class="th dataTable">Phone</th>
//             <th align="left" class="th dataTable">Email</th>
//         </tr>
//         <tr class="tr spacing"></tr>
//         {data.slice(this.state.startNum, this.state.endNum).map((val, key) => {
//             return (
//               <><tr key={key} class="tr dataTable">
//                   <td align="left">{val.city}</td>
//                   <td align="left">{val.date}</td>
//                   <td align="left">{val.ad_count}</td>
//                   <td align="left">{val.phone_count}</td>
//                   <td align="left">{val.email_count}</td>

//               </tr>
//               <tr class="tr spacing"></tr>
//               </>
//         )
//       })}
//       <tfoot>
//           <tr>
//               <td colspan="10">
//               <div style={{display: 'flex', gap: '10px', float: 'right'}}>
//                 <button type="button" class="previous" onClick={this.previous}>Previous</button>
//                 <button type="button" class="next" onClick={this.next}>Next</button>
//               </div>
//               </td>
//           </tr>
//       </tfoot>
//       </table>
//       <h4 class="showingNumberOfEntries">Showing {this.state.startNum} to {this.state.endNum} of {data.length} entries<input type="text" id="itemsDisplayed" name="itemsDisplayed" class="itemsDisplayed" onChange={this.set} onkeypress= "this.onchange();" onpaste= "this.onchange();" oninput= "this.onchange();"></input></h4>
//       </div>
//     );
//   }
// }

// export default Table;
