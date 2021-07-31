import React, {useState} from 'react';
import '../styling/index.css';
import Button from '../components/Button';
import exampleCall from '../api/exampleCall';
import '../styling/background.css';

// import '../styling/navbar.css';

function signIn() {
  //take username/pwd as a params
  //then want to import the server
  //then call the correct backend endpoint to make a request
}

// async function exampleCallFunct() {
//   const response = await exampleCall();
//   if (response.success) {
//     alert(`Server says: ${JSON.stringify(response.data)}`);
//   } else {
//     alert(`Server had an error: ${JSON.stringify(response.error)}`);
//   }
// }

function IndexPage() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div class="body">
    <div id={'index-container'}>
      <div className={'spacer'} />
      <div className={'content'}>
        <h1>Procrastination Hub</h1>
        <h3>"Just do it, later."</h3>
        <p><b>Username</b></p>
        <div class="stroke">
        <input type="text" id="firstName" name="lastName"></input>
        </div>
        <p><b>Password</b></p>
        <input type={showPassword? "text": "password"} id="passwordInput"></input>
        <br></br><input type="checkbox" onClick={() => {setShowPassword(!showPassword)}}></input>
        Show Password<br></br>
        {/* Xavier change this to the next page please */}
        <a href={'/another'}>
        <Button buttonText={'Sign In'} clickAction={signIn}/>
        </a>
      </div>
      <div className={'spacer'} />
    </div>
    </div>
  );
}

export default IndexPage;