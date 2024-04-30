import { faChartSimple, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import chart from '../assets/lg1.gif'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Add() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>

            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={handleShow} className='btn btn-warning'><FontAwesomeIcon icon={faPlus} style={{ color: "#e8eaed", }} className='me-2' /> Add new income</button>
            </div>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faChartSimple} style={{color: "#FFD43B",}} className='me-4' />Add New Income</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                      <form className='text-center border border-light rounded '>
                          <input className='mb-2 rounded' type="text" placeholder='Salary Title' /><br />
                          <input className='mb-2 rounded' type="number" placeholder='Salary Amount' /><br />
                          
                          <textarea className='textArea rounded' name="" id="" cols="30" rows="10" placeholder='Add a reference'></textarea><br />
                          <input className='mb-2 date rounded' type="date" placeholder='Enter a date' />
                         
                       </form> 

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleClose}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className='d-flex   mt-1'>
                <img src={chart} width={'100%'} height={'320px'} alt="" />
            </div>

        </>
    )
}

export default Add