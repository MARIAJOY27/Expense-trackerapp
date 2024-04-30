import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar  className="bg-body-tertiary">
        <Container >
        <Link to={'/'} style={{textDecoration:"none"}}>
          <Navbar.Brand  className='d-flex'>
            
              <img className='ms-3 mt-2 me-3' src="https://play-lh.googleusercontent.com/pvRimUSIXNT5KHU3SCfkD-wLOn_hALI-XuaDXjoncpPr2BAKvMywvtnZW8ZGj4ITOiSP=w240-h480-rw" alt="" width="40" height="40" />
              {' '}
              <h3 className='text-center mt-2' style={{overflowY:"hidden",color:"blue"}}>Expense Tracker</h3>
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>

    </>
  )
}

export default Header


