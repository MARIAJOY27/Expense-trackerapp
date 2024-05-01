import React from 'react'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <>
     <section >
          <div className="row my-5 p-5">
            <div className="col-md-1"></div>
            <div className="col-md-5">
                <h4  style={{overflowY:"hidden",color:"lightblue"}}>What is an Expense tracker?</h4>
                <p style={{textAlign:"justify"}}> Keeping a daily record of your expenses by tracking receipts, invoices, and other outgoing expenses improves the financial health of your budget.Expense tracking means recording all your expenditures so you have a clear and detailed understanding of your budget.This can be achieved with the help of an expense tracker which enables you to monitor how much of your budget has been spent over time, to see how much is remaining and course-correct when necessary. </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
                <img src="https://cdn.dribbble.com/users/827787/screenshots/5930698/digital-strategy.gif" width={'350px'} alt="" />
            </div>
          </div >
          
     </section>
     <hr />

     <section>
        <div className="row my-5">
            <h3 className=' text-center text-warning'>Wanna find Your Expenses?</h3>
            <div className="col-md-2"></div>
            <div className="col-md-5 mt-5 ">
                <img src="https://cdn.dribbble.com/users/513906/screenshots/3986167/moneyslides_800x600.gif" width={'350px'} alt="" />
            </div>
            <div className="col-md-5 mt-4 pt-5">
               <h6>Add Credit money : 
                <Link to={'/income'}>
               <button style={{borderRadius:"8px",color:"white"}} className='ms-2 p-2 bg-warning'>Add Income</button>
               </Link> </h6>
               <h6 className='mt-3'>Add Your Expenses :
                <Link to={'/expenses'}><button style={{borderRadius:"8px",color:"white"}} className='ms-1 p-2 bg-warning border-outline-transparent'>Add Expense</button>
                </Link>
                 </h6>
               <h6 className='mt-3'>View Monthly Report : 
               <Link to={'/report'}><button style={{borderRadius:"8px",color:"white",width:"100px"}} className='ms-1 p-2 bg-warning'>Report</button> </Link>
               </h6>
            </div>
            <div className='col-md-1'></div>
           
        </div>
     </section>
     <hr />
    </>
  )
}

export default Landingpage


//style={{backgroundColor:"#FFEFF1"}}