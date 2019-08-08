import React, { Component } from 'react';
import VerticalMenu from './VerticalMenu'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class Fee extends Component {
    render() {
        const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
            ,width: 200
          }, {
            Header: 'Age',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            ,width: 200
          }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
            ,width: 200
          }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
            ,maxWidth: 200
          }]
          const data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
              name: 'Jason Maurer',
              age: 23,
            }
          }]
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-3" id="left-block">
                        <VerticalMenu />
                    </div>
                    <div className="col-9" id="right-block">
                        <ReactTable data={data} columns={columns}
                        style = {{
                            height: "405px",
                            width: "100%"
                        }}
                        minRows = {5}
                        defaultPageSize={5}
                        filterable
                        className="-striped -highlight"/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Fee;