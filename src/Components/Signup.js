import { sign } from "jsonwebtoken";
import React, { useState,useEffect } from "react"
import facade from "./ApiFacade";
import Login from "./Login";

function SignUp({ signup }) {
  const init = { username: "", password: "" };
  const [signupCredentials, setSignupCredentials] = useState(init);

  const performSignup = (evt) => {
    evt.preventDefault();
    signup(signupCredentials.username, signupCredentials.password);
  }
  const onChange = (evt) => {
    setSignupCredentials({ ...signupCredentials,[evt.target.id]: evt.target.value })
  }

  return (
    <div>
      <h2>Member's signup</h2>
      <form onChange={onChange} >
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performSignup}>Sign Up</button>
      </form>
    </div>
  )
 
}
/*
function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...")
  
  useEffect(() => { 
    facade.fetchData().then(data => setDataFromServer(data.msg));
  }, [])
 
  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
    </div>
  )
 
}



---------

const AddUser = () => {
  
    const initialValue = {
      fname: "",
      password: ""
    };
    const [user, setUser] = useState(initialValue);
    const handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      setUser({...user,[name]: value});
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      window.alert(JSON.stringify(user));
      facade.addUser(user.fname,user.password);
    }
  return (
    <div>
      <h2>Add New User</h2>
      <Form onChange={handleChange} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control name="fname" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name="password" placeholder="Password" />
      </Form.Group>
      <Button variant="dark" type="submit">Add Me</Button>
      </Form>
      <p>{JSON.stringify(user)}</p>
      </div>
  );
};


*/

function Signup() {
  const [SuccessfulSignup, setSuccessfulSignup] = useState(false)

  const signup = (user, pass) => {
    facade.signup(user, pass)
    .then(res => setSuccessfulSignup(true));
  } 
 
  return (
    <div>
      {!SuccessfulSignup ? (<SignUp signup={signup} />) :
        (<div>
          <p>Signup was successful</p>
          <Login />
        </div>)}
    </div>
  )

}

export default Signup;
