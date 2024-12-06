import React, { useEffect, useState } from 'react';
import { Nav } from './Nav';
import { Button, Modal, Form } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';

export const PageNation = () => {
  let active = 1;
  let items = [];
  const [vale, setVale] = useState([]);

  // Generate pagination items
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  // Function to retrieve data from localStorage
  const getDatas = localStorage.getItem("dataVAlues");
  
  // Update state when the button is clicked

  let handleClick=()=>
  {
    let arr=[]
    for( let key in getDatas)
      {
        arr.push([key,[getDatas[key]]])
      } 
    console.log(arr)
  }


  return (
    <div>
      <Nav />
      <div className='pageNation'>
        <h1>Page</h1>
        <button onClick={handleClick}>Click</button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>City</th>
              <th>Country</th>
              <th>Zipcode</th>
            </tr>
          </thead>
          <tbody>
          
            {vale && vale.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.country}</td>
                <td>{item.zipcode}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div>
          <Pagination>{items}</Pagination>
          <br />
        </div>
      </div>
    </div>
  );
};
