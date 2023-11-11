import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const Header = () => {
  return (
    <div className="nav-wrapper">
      <Navbar className="bg-body-tertiary">
        <Navbar.Brand href="#home">Qtify</Navbar.Brand>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Search this blog"
          />
          <div class="input-group-append">
            <i class="bi bi-search"></i>
          </div>
        </div>
        <Button className='feedback-btn'>Give Feedback</Button>
      </Navbar>
    </div>
  );
}

export default Header