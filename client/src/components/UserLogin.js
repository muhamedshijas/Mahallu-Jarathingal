import React from 'react'
import login2 from '../assets/images/login3.png'
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

function UserLogin() {
    return (
        <div className='user-login'>
            <div className="login-section">
                <div className="login-form">
                    <div class="form-outline">
                    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"  />
                    <MDBBtn>Submit</MDBBtn>
                    </div>
                </div>
                <div className="login-image">
                    <img src={login2} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default UserLogin