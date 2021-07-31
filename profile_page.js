import React from 'react';
import '../styling/profile_page.css';
import Button from '../components/Button';
import { getMeaningOfLife } from '../utils/ExampleUtil';
import about_us from './about_us';

function getResult() {
    alert(`Why would you want to do that?`)
  }
  function getSignOut() {
      alert(`Signed out successfully!`)
  }
  function aboutUs() {

  }

function profile_page() {

  return (
    <div>
      <div class = 'body'>
      <div class="navbar">
            <img class= "logo" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e2e65a73-04bd-4fd8-a873-bb33ba3ed9d6/Image_31-07-21_at_11.58_AM.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210731T025039Z&X-Amz-Expires=86400&X-Amz-Signature=bdd46ef1d539981ad8b2c558a355ca99b3a9d0fb987916e687578b6f3ed5a859&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Image_31-07-21_at_11.58_AM.jpg%22"></img>
            <div class= "links">
              <a href = {'/about_us'}>
                <Button class="btn" buttonText={"About Us"} clickAction={about_us}/>
                </a>
                <h3 class="btn">Focus</h3>
                <Button class="btn" buttonText={"GO BACK TO WORK"} clickAction={getResult} />
                <Button class="btn" buttonText={"Sign Out"} clickAction={getSignOut}/>
                
            </div>
        </div>
        <div class="whatever">
        <div class="profile">
          <h1>Profile</h1><br></br>
          <p>
            <b>Name: </b>Samin Yasar<br></br> <b>Username: </b>syas141<br></br> <b>Email: </b>samin123@gmail.com<br></br> 
          </p>
          <h2>Weekly Leaderboard</h2>
          <table>
            <th>Position </th>
            <th>Name </th>
            <th>Hours Procrastinated </th>
            <tr>
              <td>1</td>
              <td>Radwan</td>
              <td>12</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Matthew</td>
              <td>10</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Xavier</td>
              <td>9</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Samin</td>
              <td>6</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Nathan</td>
              <td>5</td>
            </tr>
          </table>
          <br></br><br></br>
        </div>
        <img class = "chart" src = "./Untitled.png"></img>
        </div>
        </div>
    </div>

  );
}

export default profile_page;
