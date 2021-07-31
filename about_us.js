import React from 'react';
import '../styling/about_us.css';
import Button from '../components/Button';
import { getMeaningOfLife } from '../utils/ExampleUtil';
import profile_page from './profile_page';

function getResult() {
    alert(`Why would you want to do that?`)
  }
  function getSignOut() {
      alert(`Signed out successfully!`)
  }

function about_us() {

  return (
    <div>
      <div class="navbar">
            <img class= "logo" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e2e65a73-04bd-4fd8-a873-bb33ba3ed9d6/Image_31-07-21_at_11.58_AM.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210731T025039Z&X-Amz-Expires=86400&X-Amz-Signature=bdd46ef1d539981ad8b2c558a355ca99b3a9d0fb987916e687578b6f3ed5a859&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Image_31-07-21_at_11.58_AM.jpg%22"></img>
            <div class= "links">
            <a href = {'/profile'}>
            <Button class="btn" buttonText={"Profile"} clickAction={profile_page} />
            </a>
                <h3 class="btn">Focus</h3>
                <Button class="btn" buttonText={"GO BACK TO WORK"} clickAction={getResult} />
                <Button class="btn" buttonText={"Sign Out"} clickAction={getSignOut}/>
                
            </div>
            <div>
                <h1>About Us</h1>
                <p>
                    <b>Meet the creators of Procastination Hub:</b><br></br><br></br>Matthew Young<br></br>Xavier Ladores<br></br>Samin Yasar<br></br>Radwan Rahman<br></br>Nathan Bond 
                </p>
                
            </div>
        </div>
    </div>

  );
}

export default about_us;