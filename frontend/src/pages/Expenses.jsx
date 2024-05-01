import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouse, faWallet, faMoneyBill, faSquarePollVertical, faPlus, faReceipt, faTrash} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { uploadExpenseAPI } from '../Services/allAPI';



function Expenses() {
  
  const [show,setShow]=useState(false)
  const [details,setDetails]=useState({
    
    title:"",
    amount:"",
    date:"",
    info:""
  })
  console.log(details);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
 //Adding Expense
    const handleUpload= async()=>{
      const {title,amount,date,info} = details
      if(!title || !amount|| !date|| !info){
        toast.info('please fill the form completely')
      }else{
       const response =await uploadExpenseAPI(details)
       console.log(response);
      
        toast.success('Expense added successfully ')
        handleClose()
       
      }
    }
 
 
  return (
    <>
    <div >
        <div className='row '>
            <div className='col-md-3  rounded m-5 p-3 ' style={{height:'80vh',width:'300px', backgroundColor:'rgb(195, 250, 230',}}>
            <h6 style={{overflowY:'hidden'}} ><FontAwesomeIcon icon={faUser} bounce  className='pe-3'/><b>Thasleena</b></h6>
            <div className='mt-5 ms-4'>
            <Link to={'/'} style={{textDecoration:'none',color:'black'}}><h6 style={{overflowY:'hidden'}} ><FontAwesomeIcon icon={faHouse} bounce   className='pe-3'/> Home</h6></Link>
            <Link to={'/income'} style={{textDecoration:'none',color:'black'}}><h6 style={{overflowY:'hidden'}} ><FontAwesomeIcon icon={faWallet} bounce  className='pe-3'/> Income</h6></Link>
           <Link to={'/expenses'} style={{color:'black'}}> <h6 style={{overflowY:'hidden'}} ><FontAwesomeIcon icon={faMoneyBill} bounce  className='pe-3'/>Expense</h6></Link>
           <Link to={'/report'} style={{textDecoration:'none',color:'black'}}> <h6 style={{overflowY:'hidden'}} ><FontAwesomeIcon icon={faSquarePollVertical} bounce  className='pe-4' />Report</h6></Link>
         </div>
         </div>
         <div className='col-md-9 m-5 p-3 rounded' style={{height:'80vh',width:'130vh', backgroundColor:'rgb(195, 250, 230',overscrollBehavior:''}}>
            <h2 style={{overflowY:'hidden'}} ><b>EXPENSES</b></h2>
            
            <div className='row'>
            <div className='mt-4 pt-2 w-100 rounded' style={{backgroundColor:'white',height:'60px',textAlign:'center'}}><h5  style={{fontSize:'20px',overflowY:'hidden'}}>Total Expense:  ₹15464</h5></div>
                <div className='col-md-4 rounded mt-5 pt-3'>
                    
                 

                   <div className='rounded p-2 ms-1'> <button className=' rounded btn btn-danger' type='button' onClick={handleShow}><FontAwesomeIcon icon={faPlus} className='pe-2' />Add Expense</button></div>
                   <img src="https://cdn-icons-png.flaticon.com/512/3200/3200925.png" alt="" style={{width:'150px',height:'150px'}} className='mt-3'/>
                   
                   </div>
                  
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faReceipt} className='me-2 text-danger' />Add New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Please fill the following details</p>
     <form className='mt-3 border p-2 rounded' >
        <div className='mb-3'>
        <input type="text" placeholder='Expense Title' className='form-control' onChange={(e)=>setDetails({...details,title:e.target.value})}/>
        </div>
        <div className='mb-3'>
        <input type="text" placeholder='Expense Amount' className='form-control' onChange={(e)=>setDetails({...details,amount:e.target.value})} />
        </div>
        <div className='mb-3'>
        <input type="date"  style={{width:'182px'}} className='form-control' onChange={(e)=>setDetails({...details,date:e.target.value})} />
        </div>
        <div className='mb-3'>
        <textarea name="" id="" cols="25" rows="4" className='form-control' placeholder='Additional Info' onChange={(e)=>setDetails({...details,info:e.target.value})}></textarea>
        </div>
     </form>
     </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpload}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
                
                <div className='col-md-6 rounded mt-4 pt-3 '>
                   
                <div className='m-3 p-1 'style={{backgroundColor:'aquamarine'}}>
                   
                   <h5 style={{overflowY:'hidden'}}> <FontAwesomeIcon icon={faReceipt} className='pe-5' /> Medical Expense <FontAwesomeIcon icon={faTrash}  className='ps-5 ms-5' /></h5>
                   <div className='d-flex ms-4 pt-1'><h6 style={{overflowY:'hidden'}} className='pe-5'>₹15</h6>
                   <h6 style={{overflowY:'hidden'}} className='pe-5'>12/01/2024</h6>
                   <h6 style={{overflowY:'hidden'}} className='pe-5'>body check up</h6>
                   </div>
    
    
                   </div>
    
                   
                   <div className='m-3 p-1 'style={{backgroundColor:'aquamarine'}}>
                   
                   <h5 style={{overflowY:'hidden'}}> <FontAwesomeIcon icon={faReceipt} className='pe-5' /> Medical Expense <FontAwesomeIcon icon={faTrash}  className='ps-5 ms-5' /></h5>
                   <div className='d-flex ms-4 pt-1'><h6 style={{overflowY:'hidden'}} className='pe-5'>₹15</h6>
                   <h6 style={{overflowY:'hidden'}} className='pe-5'>12/01/2024</h6>
                   <h6 style={{overflowY:'hidden'}} className='pe-5'>body check up</h6>
                   </div>
    
    
                   </div>
                   <div className='m-3 p-1'style={{backgroundColor:'aquamarine',}}>
                   
                   <h5 style={{overflowY:'hidden'}}> <FontAwesomeIcon icon={faReceipt} className='pe-5' /> Medical Expense <FontAwesomeIcon icon={faTrash}  className='ps-5 ms-5 ' /></h5>
                   <div className='d-flex ms-4 pt-1'><h6 style={{overflowY:'hidden'}} className='pe-5'>₹15</h6>
                   <h6 style={{overflowY:'hidden'}} className='pe-5'>12/01/2024</h6>
                   <h6 style={{overflowY:'hidden'}} className='pe-5'>body check up</h6>
                   </div>
    
    
                   </div>
    
    
    
                </div>
            </div>
    
         </div>
        
        </div>
    </div>
    <ToastContainer theme='colored' position='top-center' autoClose={2000} />

    </>
  )
}

export default Expenses              