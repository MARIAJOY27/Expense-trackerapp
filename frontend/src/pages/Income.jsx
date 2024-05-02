import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Income.css'
import { faChartSimple, faGlobe, faHouse, faMoneyBill, faTrash, faUser, faWallet } from '@fortawesome/free-solid-svg-icons'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { deleteAnIncomeAPI, getIncomeAPI } from '../Services/allAPI'



function Income() {

  //state to hold income from backend
  const [incomes, setIncomes] = useState([])

  // child (add) to parent(income) - state lifting
  const [incomesUploadStatus,setIncomesUploadStatus] = useState(false)
  //delete automatically
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)

  // to diplay adding incomes in income page(income.jsx) 
  const getIncome = async () => {
    const response = await getIncomeAPI()
    setIncomes(response.data)
  }

  console.log(incomes);

  let sum = 0
  for (let i = 0; i < incomes.length; i++) {
    //  console.log(incomes[i].amount);
    sum += Number(incomes[i].amount)

  }
  console.log(sum);

  // useEffect hook  - empty array dependency - when page loads
  useEffect(() => {
    getIncome()
    setIncomesUploadStatus(false)
    setDeleteVideoStatus(false)
  }, [incomesUploadStatus,deleteVideoStatus])

  const handleDelete = async(id)=>{
      const response = await deleteAnIncomeAPI(id)
      setDeleteVideoStatus(true)
      console.log(response);
  }




  return (
    <div className='mx-3'>
      <div className="row mt-4 ">
        <div className="col-md-2 pt-5  one">
          <div className='d-flex mt-3 ms-4'>
            <FontAwesomeIcon icon={faUser} className='me-4 fa-2x' />
            <b className='fs-3'>Sneha</b>
          </div>
          <div className='mt-5'>
            <ul>
              <Link to={'/'} style={{ textDecoration: 'none' }}>
                <li>
                  <h6 className='text-dark'><FontAwesomeIcon icon={faHouse} className='me-3 mb-1' />Home</h6>
                </li>
              </Link>
              <Link to={'/income'} style={{ textDecoration: 'none' }}>
                <li>
                  <h6 className='text-dark'><FontAwesomeIcon icon={faWallet} className='me-3 mb-1' /> Incomes</h6>
                </li>
              </Link>

              <Link to={'/expenses'} style={{ textDecoration: 'none' }}>
                <li>
                  <h6 className='text-dark'><FontAwesomeIcon icon={faMoneyBill} className='me-3' /> Expenses</h6>
                </li>
              </Link>


              <Link to={'/report'} style={{ textDecoration: 'none' }}>
                <li>
                  <h6 className='text-dark'><FontAwesomeIcon icon={faChartSimple} className='me-4' />Report</h6>
                </li>
              </Link>

            </ul>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-9 two">
          <h3 className='text-dark innersource '><b>INCOMES</b></h3>
          <div className='rounded mt-4'>
            <h1 className='text-center total p-3 fs-3 text-dark'>Total Income : ₹{sum}</h1>

            <div className="row mt-2 pt-5">
              <div className="col-md-4  ps-4">

                <Add setIncomesUploadStatus={setIncomesUploadStatus} />
              </div>
              {/* <div className="col-md-1"></div> */}
              <div className="col-md-7 ">


                {incomes?.length > 0 ?
                  incomes?.map((item) => (
                    <div className="container-fluid  source rounded mb-3 ">
                      <div className='d-flex'>
                        <h6 className='text-dark'><FontAwesomeIcon icon={faGlobe} className='fa-2x me-2 pt-1 globe' />{item.title}</h6>

                        <button onClick={()=>handleDelete(item.id)} className='btn trash-btn text-danger  ms-auto pt-2'><FontAwesomeIcon icon={faTrash} className='fa-2x' /></button>
                      </div>
                      <div className="d-flex align-items-center justify-content-evenly ">
                        <h6 className='text-light innersource'><b>{item.amount}</b></h6>
                        <h6 className='text-light innersource'><b>{item.date}</b></h6>
                        <h6 className='text-light innersource'><b>{item.reference}</b></h6>
                      </div>
                    </div>
                  ))

                  :
                  <h3 className='text-dark'>No incomes added yet.....</h3>}

                {/* <div className="container-fluid  source rounded mb-3">
                          <div className='d-flex'>
                            <h6 className='text-dark'><FontAwesomeIcon icon={faGlobe} className='fa-2x me-2 pt-1 globe' />From Freelance</h6>
                            
                            <button className='btn trash-btn text-danger  ms-auto pt-2'><FontAwesomeIcon icon={faTrash} className='fa-2x'  /></button>
                            </div>
                          <div className="d-flex align-items-center justify-content-evenly ">
                          <h6 className='text-light innersource'><b>₹ 1300</b></h6>
                                <h6 className='text-light innersource'><b>12/09/2024</b></h6>
                                <h6 className='text-light innersource'><b>freelance</b></h6>
                          </div>
                        </div>

                        <div className="container-fluid  source rounded mb-3">
                          <div className='d-flex'>
                            <h6 className='text-dark'><FontAwesomeIcon icon={faGlobe} className='fa-2x me-2 pt-1 globe' />From Freelance</h6>
                            
                            <button className='btn trash-btn text-danger  ms-auto pt-2'><FontAwesomeIcon icon={faTrash} className='fa-2x'  /></button>
                            </div>
                          <div className="d-flex align-items-center justify-content-evenly ">
                          <h6 className='text-light innersource'><b>₹ 1300</b></h6>
                                <h6 className='text-light innersource'><b>12/09/2024</b></h6>
                                <h6 className='text-light innersource'><b>freelance</b></h6>
                          </div>
                        </div>

                        <div className="container-fluid  source rounded mb-3">
                          <div className='d-flex'>
                            <h6 className='text-dark'><FontAwesomeIcon icon={faGlobe} className='fa-2x me-2 pt-1 globe' />From Freelance</h6>
                            
                            <button className='btn trash-btn text-danger  ms-auto pt-2'><FontAwesomeIcon icon={faTrash} className='fa-2x'  /></button>
                            </div>
                          <div className="d-flex align-items-center justify-content-evenly ">
                          <h6 className='text-light innersource'><b>₹ 1300</b></h6>
                                <h6 className='text-light innersource'><b>12/09/2024</b></h6>
                                <h6 className='text-light innersource'><b>freelance</b></h6>
                          </div>
                        </div>   */}









              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Income
