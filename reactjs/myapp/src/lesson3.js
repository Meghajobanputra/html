import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
var output = <div>
 
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 className="text-center mb-4">Register</h2>
        <form action="" method="post">
          <div className="mb-3">
            <label for="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" name="username" required></input>
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" required></input>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" required></input>
          </div>
          <div className="mb-3">
            <label for="confirm_password" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirm_password" name="confirm_password" required></input>
          </div>
          
          <div className='text-end'>
          <button type="submit" className="btn btn-primary mx-2">Register</button>
          <button type="submit" className="btn btn-danger mx-2">clear all</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

root.render(output);