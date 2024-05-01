import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCircleArrowUp, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
faCircleArrowDown
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


function Report() {
  return (
    <div className='row mt-5'>
      <div className="col-md-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 ">
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title className='text-center'><span id='balance'>Balance: $60</span></Card.Title>
                {/* <Card.Text> */}
                <div className=' d-flex align-items-center justify-content-between'>
                  <Card>
                    {/* <TextField label="Income" variant="outlined" fullWidth /> */}
                    <h4 className='text-center mt-2'><b>$560</b></h4>
                    <Card.Body className='w-100'><FontAwesomeIcon className='me-2' icon={faCircleArrowUp} style={{ color: "#78C2AD", }} /><b>Income</b></Card.Body>
                  </Card>
                  <Card>
                    <h4 className='text-center mt-2'><b>$500</b></h4>
                    <Card.Body><FontAwesomeIcon className='me-2' icon={faCircleArrowDown} style={{ color: "#78C2AD", }} /><b>Expense</b></Card.Body>
                  </Card>

                </div>

                {/* </Card.Text> */}

              </Card.Body>
            </Card>

          </div>
          <div className="col-md-2"></div>

        </div>
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <Card>
              <h5 className='m-3'>Planning your Finances <FontAwesomeIcon icon={faAngleRight} /></h5>
              <Card.Body >
                <img src="https://www.syncfusion.com/blogs/wp-content/uploads/2021/02/This-column-chart-shows-the-past-years%E2%80%99-income-and-expense-details..jpg" alt="" className='w-100' />


              </Card.Body>
            </Card>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <div className="col-md-7 p-4" style={{ overflowX: 'auto' }}>
      <Table striped >
      <thead>
        <tr className='text-center'>
          <th >Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-center'>
          <td>30-04-2024</td>
          <td>Tesco</td>
          <td>Groceries</td>
          <td>$55</td>
        </tr>
        <tr className='text-center'>
        <td>30-04-2024</td>
          <td>Tesco</td>
          <td>Groceries</td>
          <td>$55</td>
        </tr>
        <tr className='text-center'>
        <td>30-04-2024</td>
          <td>Tesco</td>
          <td>Groceries</td>
          <td>$55</td>
        </tr>
      </tbody>
    </Table>
      </div>

    </div>
  )
}

export default Report
