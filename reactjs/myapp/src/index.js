import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
var output = <div>
 
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 className="text-center mb-4">Change Password</h2>
        <form action="" method="post">
          <div className="mb-3">
            <label for="current_password" className="form-label">Current Password</label>
            <input type="password" className="form-control" id="current_password" name="current_password" required></input>
          </div>
          <div className="mb-3">
            <label for="new_password" className="form-label">New Password</label>
            <input type="password" className="form-control" id="new_password" name="new_password" required></input>
          </div>
          <div className="mb-3">
            <label for="confirm_password" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirm_password" name="confirm_password" required></input>
          </div>
          <button type="submit" class="btn btn-primary">Change Password</button>
        </form>
      </div>
    </div>
  </div>

</div>
  


root.render(output);