import React from "react";
import {Link } from "react-router-dom";
import nav from "../css/signupnav.module.css";  

function Signnav() {
  return (
    <>
      <div>
        <div>
          <header>
            <h1>CAR PARKING</h1>
          </header>

          <nav>
            <div className={nav.container}>
              <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/">About</Link>
                </li>
                <li>
                <Link to="/">Services</Link>
                </li>
                <li>
                <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Signnav;
