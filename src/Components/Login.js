import React, { useState,useEffect } from "react"
import facade from "./ApiFacade";
 
function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
 
  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  }
  const onChange = (evt) => {
    setLoginCredentials({ 
      ...loginCredentials,[evt.target.id]: evt.target.value });
  }
  return (
    <div>
      <h2>Member's login</h2>
      <form onChange={onChange} >
        <input type="text" placeholder="User Name" id="username" />
        <input type="password" placeholder="Password" id="password" />
        <button onClick={performLogin}>Login</button>
        <br></br>
      </form>
    </div>
  ); 
}

function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...")
  
  useEffect(() => {
    facade.fetchData().then((data) => {
      setDataFromServer(data.msg);
    });
  }, []);
  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
    </div>
  );
}
 
function LoginHandler() {
  const [loggedIn, setLoggedIn] = useState(false)
 
  const logout = () => { 
    facade.logout();
    setLoggedIn(false);
  } 
  const login = (user, pass) => {
    facade.login(user, pass)
    .then(res => setLoggedIn(true));
  } 
  return (
    <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>
        </div>)}
    </div>
  )
}

export default LoginHandler;