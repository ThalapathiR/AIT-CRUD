import React, { useState } from 'react';
import { Nav } from './Nav';
import { Button, Modal, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addData, removeData, updateData } from './slice';
import axios from 'axios'

export const User = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.viewData);
  
  // const [page,setPage]=useState=[]
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zipcode: ''
  });

  const [editMode, setEditMode] = useState(false);
  const [editingUser, setEditingUser] = useState(null);  

  const handleShow = async() => 
    
    {
  

    const result=  await  axios.post("http://localhost:3001/api/create",{Email:formData.email,PassWord:formData.name})
console.log(result.data)
    setShowModal(true);
    }
  const handleClose = () => {
    setShowModal(false);
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editMode) {
  
      dispatch(updateData({ email: editingUser.email, updatedUser: formData }));
    } else {

      dispatch(addData(formData));
    }

let localStore=JSON.stringify(formData)

localStorage.setItem("dataVAlues",localStore)

console.log(localStore)
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: '',
      zipcode: ''
    });
    handleClose();
  };

  const handleDelete = (index) => {
    // alert("")
    dispatch(removeData(index));
  };

  const handleEdit = (user) => {

    setEditingUser(user);
    setFormData(user);  
    setEditMode(true);
    setShowModal(true);  
  };





  return (
    <div>
      <Nav />
      <div className="tabbb">
       <Button variant='primary'  onClick={handleShow} >Add Data</Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>City</th> 
              <th>Country</th>
              <th>Zipcode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.country}</td>
                <td>{item.zipcode}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
                  <Button variant="success" onClick={() => handleEdit(item)}>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Edit User' : 'Add User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
           
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone"
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
              />
            </Form.Group>

            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
              />
            </Form.Group>

            <Form.Group controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter country"
              />
            </Form.Group>

            <Form.Group controlId="formZipcode">
              <Form.Label>Zipcode</Form.Label>
              <Form.Control
                type="text"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                placeholder="Enter zipcode"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {editMode ? 'Update' : 'Submit'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
