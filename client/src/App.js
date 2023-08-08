import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { Route,Routes } from 'react-router-dom';
import UserLoginPage from './pages/UserLoginPage';

function App() {
  return (
    <MDBContainer fluid>
      <Routes>
      <Route path='/login' element={<UserLoginPage/>}/>
      </Routes>
    </MDBContainer>
  );
}

export default App;
