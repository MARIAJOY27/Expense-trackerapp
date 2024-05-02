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


// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleRight, faCircleArrowUp, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
// import Card from 'react-bootstrap/Card';
// import Table from 'react-bootstrap/Table';

// function Report() {
//   const [incomes, setIncomes] = useState([]);
//   const [expenses, setExpenses] = useState([]);

//   useEffect(() => {
//     // Fetch income data
//     fetch('/api/incomes')
//       .then(response => response.json())
//       .then(data => setIncomes(data.incomes))
//       .catch(error => console.error('Error fetching income data:', error));

//     // Fetch expense data
//     fetch('/api/expenses')
//       .then(response => response.json())
//       .then(data => setExpenses(data.expenses))
//       .catch(error => console.error('Error fetching expense data:', error));
//   }, []);

//   // Calculate total income and expense
//   const totalIncome = incomes.reduce((total, income) => total + parseFloat(income.amount), 0);
//   const totalExpense = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

//   return (
//     <div className='row mt-5'>
//       <div className="col-md-5">
//         <div className="row">
//           <div className="col-md-2"></div>
//           <div className="col-md-8 ">
//             <Card style={{ width: '100%' }}>
//               <Card.Body>
//                 <Card.Title className='text-center'><span id='balance'>Balance: ${totalIncome - totalExpense}</span></Card.Title>
//                 <div className='d-flex align-items-center justify-content-between'>
//                   <Card>
//                     <h4 className='text-center mt-2'><b>${totalIncome}</b></h4>
//                     <Card.Body className='w-100'><FontAwesomeIcon className='me-2' icon={faCircleArrowUp} style={{ color: "#78C2AD" }} /><b>Income</b></Card.Body>
//                   </Card>
//                   <Card>
//                     <h4 className='text-center mt-2'><b>${totalExpense}</b></h4>
//                     <Card.Body><FontAwesomeIcon className='me-2' icon={faCircleArrowDown} style={{ color: "#78C2AD" }} /><b>Expense</b></Card.Body>
//                   </Card>
//                 </div>
//               </Card.Body>
//             </Card>
//           </div>
//           <div className="col-md-2"></div>
//         </div>
//         <div className="row mt-5">
//           <div className="col-md-2"></div>
//           <div className="col-md-8">
//             <Card>
//               <h5 className='m-3'>Planning your Finances <FontAwesomeIcon icon={faAngleRight} /></h5>
//               <Card.Body >
//                 {/* Replace the placeholder image with your actual financial planning chart */}
//                 <img src="https://www.syncfusion.com/blogs/wp-content/uploads/2021/02/This-column-chart-shows-the-past-years%E2%80%99-income-and-expense-details..jpg" alt="" className='w-100' />
//               </Card.Body>
//             </Card>
//           </div>
//           <div className="col-md-2"></div>
//         </div>
//       </div>
//       <div className="col-md-7 p-4" style={{ overflowX: 'auto' }}>
//         <Table striped >
//           <thead>
//             <tr className='text-center'>
//               <th>Date</th>
//               <th>Description</th>
//               <th>Category</th>
//               <th>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Render income data */}
//             {incomes.map(income => (
//               <tr key={income.id} className='text-center'>
//                 <td>{income.date}</td>
//                 <td>{income.title}</td>
//                 <td>Income</td>
//                 <td>${income.amount}</td>
//               </tr>
//             ))}
//             {/* Render expense data */}
//             {expenses.map(expense => (
//               <tr key={expense.id} className='text-center'>
//                 <td>{expense.date}</td>
//                 <td>{expense.title}</td>
//                 <td>Expense</td>
//                 <td>-${expense.amount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// }

// export default Report;