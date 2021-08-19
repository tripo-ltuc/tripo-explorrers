import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import '../App.css';


function LoginButton() {
  
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();
  

  return !isAuthenticated && (
    <section className="bg-image">
      <h1 className="text-center txtLongin">Welcome to <span>TRIPO !</span> </h1>
    <div
        style={{ display:"flex",justifyContent: "center",alignItems: "center"}}
      >
    <Button className="text-center btnLogin" onClick={loginWithRedirect} variant="success" size="lg">LOG IN</Button>
    </div>
    </section>

  );
}

export default LoginButton;