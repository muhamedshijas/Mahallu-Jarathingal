import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { Route,Routes } from 'react-router-dom';
import UserLoginPage from './pages/UserLoginPage';
import UserSignUpPage from './pages/UserSignUpPage';

function App() {
  return (
    <MDBContainer fluid>
      <Routes>
      <Route path='/login' element={<UserLoginPage/>}/>
      <Route path='/signup' element={<UserSignUpPage/>}/>
      </Routes>
    </MDBContainer>
  );
}

export default App;
