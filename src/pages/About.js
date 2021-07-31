import React, {useState} from 'react';
import '../styling/index.css';
import Button from '../components/Button';
import '../styling/navbar.css';
import '../styling/leftshift.css';

function aboutPage() {
    return (
        <div id={'index-container'}>
          <div className={'spacer'} />
          <div className={'content'}>
              <div class="titleshift">
          <h1>About Us</h1>
          </div>
          <div class="chart">
            <p><h3>
                Meet the creators of The Procrastination Hub
            </h3></p>
            <p>
                <b>Matthew Young</b><br></br>
                <b>Xavier Ladores</b><br></br>
                <b>Samin Yasar</b><br></br>
                <b>Radwan Rahman</b><br></br>
                <b>Nathan Bond</b><br></br>
            </p>
            <img src="fivemusketeersabout.jpg"></img>
            </div>
          </div>
          <div className={'spacer'} />
        </div>
      );
}

export default aboutPage;
