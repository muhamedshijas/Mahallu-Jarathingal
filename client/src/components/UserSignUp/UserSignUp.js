import React, { useState } from 'react'
import login from '../../assets/images/login.png'
import '../UserLogin/UserLogin.css'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function UserSignUp() {
    const [phone,setPhone]=useState()
  return (
    <div className='user-login'>
    <div className="login-section">
        <div className="login-form">
            <h2>Jarathingal Mahallu</h2>
            <div class="form-outline">
            <MDBInput wrapperClass='mb-4' label='Phone No' id='formControlLg' type='tel' size="lg"  />
           
            <MDBBtn>Sent Otp</MDBBtn>
            </div>
            <div className="login-signup">
            <p>al ready have an account </p>
            <Link to='/login'>Login Here</Link>
            </div>
        </div>
        <div className="login-image">
            <img src={login} alt="" srcset="" />
        </div>
    </div>
</div>
  )
}

export default UserSignUp