import React, { Component } from 'react';
import VerticalMenu from './VerticalMenu'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import feeData from '../data/fee.json'
class Fee extends Component {
  processDate = inputDate => {
    let y = inputDate.substring(0, 4);
    let m = inputDate.substring(4, 6);
    let d = inputDate.substring(6, 8);
    return (y + '-' + m + '-' + d)
  }
  render() {
    const columns = [{
      Header: 'Id',
      accessor: 'id' // String-based value accessors!
      ,
      style: {
        textAlign: 'center'
      },
      width: 50
    }, {
      Header: 'Type',
      accessor: 'type',
      style: {
        textAlign: 'center'
      },
      Cell: props => <span className='number col-center ' style={{ textAlign: 'center' }}>{props.value}</span> // Custom cell components!
      , width: 200
    }, {
      id: 'Amount', // Required because our accessor is not a string
      Header: 'Amount',
      style: {
        textAlign: 'center'
      },
      accessor: 'amount' // Custom value accessors!
      , width: 200
    }, {
      Header: props => <span  >Time</span>, // Custom header components!
      accessor: 'time'
      , width: 200,
      style: {
        textAlign: 'center'
      },
    }, {
      Header: props => <span>Desc</span>, // Custom header components!
      accessor: 'desc'
      , minWidth: 200,

    }]

    return (

      <div className="container-fluid">
        <div className="row overflow-auto">
          <div className="col-2" id="left-block">
            <VerticalMenu />
          </div>
          <div className="col-10" id="right-block">
            <div className="form-row pt-3">
              <input type="text" className="col-4 form-control"/>
              <input type="submit" className="btn btn-primary ml-3" value="Search"/>
            </div>
            <br></br>
            <ReactTable data={feeData} columns={columns}
              style={{

                width: "100%"
              }}
              showPageSizeOptions={false}
              defaultPageSize={5}
              filterable = {false}
              className="-striped -highlight"
              previousText={"Previous"}
              nextText={"Next"}

            />
            
            <form id="from-submit" className="mt-2">
              <div className="form-row">
                <div className="col-sm-3">
                  <select className="form-control">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="col-sm-2">
                  <input type="text" className="form-control" placeholder="Amount" name="amount" />
                </div><div className="col-sm-2">
                  <input type="text" className="form-control" placeholder="Time" name="time" />
                </div><div className="col-sm-4">
                  <input type="text" className="form-control" placeholder="Desc" name="desc" />
                </div><div className="col-sm-1 pr-0">
                  <input type="submit" className="btn btn-success" value="Submit" id="inputBtn"/>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>

    );
  }
}

export default Fee;