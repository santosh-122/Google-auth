import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import jwt_decode from 'jwt-decode';
// import google from 'google';

function App() {
  const [user,setUser] = useState({});
  function handleCallback(response){
    console.log("ENcode:" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject)

  }
  useEffect(() => {
   google.accounts.id.initialize({
    client_id:"973809061615-h3isib6b3ef9qkfdfq0hd0fu8hbohqgc.apps.googleusercontent.com",
    callback: handleCallback
   })

   google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme:"outline",size:"large"}
   );
  },[]);
  return (
    <div className="App">
     <div id ="signInDiv"></div>
    </div>
  );
}

export default App;
