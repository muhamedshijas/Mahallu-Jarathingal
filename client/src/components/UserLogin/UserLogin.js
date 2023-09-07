import React from 'react'
import login from '../../assets/images/login.png'
import logo from '../../assets/images/logo.png'
import { OutlinedInput } from '@mui/material';
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
import './UserLogin.css'
import { Link } from 'react-router-dom';

function UserLogin() {
    return (
        <div className='user-login'>
            <div className="login-section">
                <div className="login-form">
                    <h2> <img src={logo}/> Jarathingal Mahallu</h2>
                    <div class="form-outline">
                    <MDBInput wrapperClass='mb-4' label='Phone No' id='formControlLg' type='tel' size="lg"  />
                    <MDBInput wrapperClass='mb-4' label='password' id='formControlLg' type='password' size="lg"  />
                    <MDBBtn>Submit</MDBBtn>
                    </div>
                    <div className="login-signup">
                    <p>Have any trouble during login </p>
                    <Link to='/signup'>SignUp Here</Link>
                    </div>
                </div>
                <div className="login-image">
                    <img src={login} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default UserLogin