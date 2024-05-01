import React from 'react'
import SideBar from './sidebar';

import styles from "./viewPark.module.css";

function ParkingSlot ({flag, index}) {
  return <>
  <span style={{
    width: "3.5rem",
     height: "3.5rem", 
     color: !flag? "black" : "white",
      background: flag ? "black" : "white",
       border: flag ? "1px solid transparent" : "1px solid black",
       borderRadius: "10px",
       cursor: "pointer",
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
       fontFamily: "monospace"
       }}>
        {index+1}
       </span>
  </>
}



const ViewParking = () => {
// demo data
  const parkingStatus =  [false, false, false, false, true, true, false, false, false, true, false, true, true, true, true, false, false, false];
  
  return (
    <>
          <h1 className="dash-title">View Parking</h1>
       
       <div className={styles.topContainer}>
       <div className={styles.container}>
                {
                  parkingStatus.map((isBooked,index) => {
                    return <ParkingSlot index={index} flag={isBooked} key={index} />
                  } )
                }
             </div> 
       </div>
         
       
              
 
      <style jsx>{`
        .dash-page{
          width : fit-content;
          display : flex;
        }

        @media (max-width : 767px){
          .dash-page{
            flex-direction : column;
          }
        }

        .dash-container {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 44px 50px 76px;
        }
        @media (max-width: 991px) {
          .dash-container {
            padding: 0 20px;
          }
        }

        .dash-title {
          color: #000;
          margin : 0 0 02.5%;
          width : fit-content;
          font: 600 2.5rem Manrope, sans-serif;
        }

        @media (max-width: 991px) {
          .dash-title {
            max-width: 100%;
            margin-right: 10px;
            font-size: 40px;
          }
        }
        
        .own-profile-form-container{
          display : flex;
          flex-direction : column;
          height : 100%;
          width : 100%;
        }

        .own-profile-form {
          box-shadow : 0 5px 10px 2.5px grey, 
                       5px 0 10px 2.5px grey, 
                       0 -1px 3px 1px grey, 
                       -1px 0 3px 1px grey;
          border-radius: 10px;
          background-color: #000;
          display: flex;
          margin-top: 42px;
          height : 60%;
          width : 110%;
          flex-direction: column;
          padding: 6% 3%;
        }

        @media (max-width: 991px) {
          .own-profile-form {
            height : 86% !important;
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
            padding-bottom : 8%;
          }
        }

        @media (max-width: 767px) {
          .own-profile-form {
            height : 86% !important;
            max-width: 100%;
            margin : 25% auto;
            padding: 0 20px;
          }
        }

        .top-info{
          display : flex;
          flex-direction : row;
        }

        .own-profile-input-fields {
          display: flex;
          width: 100%;
          align-items: start;
          gap: 4%;
          font-size: 1.2rem;
          color: #fff;
          font-weight: 600;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .own-profile-input-fields {
            display : grid;
            grid-template-columns : 1fr 1fr;
            grid-template-rows : 1fr 1fr;
            padding-top : 2.5%;
            width: 90%;
            gap : 10%;
            justify-content : space-between;
          }
        }
        .own-profile-additional-info {
          margin-top: 47px;
        }
        @media (max-width: 991px) {
          .own-profile-additional-info {
            max-width: 100%;
            margin-top: 0;
          }
        }
        .own-profile-info-columns {
          display: flex;
          justify-content : flex-start;
          gap: 9%;
          padding-left : 1%;
          margin-bottom : 3%;
        }
        @media (max-width: 991px) {
          .own-profile-info-columns {
            flex-direction: column;
            align-items: stretch;
            gap: 3%;
            padding-left : 1%;
          }
        }
        .own-profile-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: fit-content;
          margin-left: 0;
        }
        @media (max-width: 991px) {
          .own-profile-column {
            width: 100%;
          }
        }

        .own-profile-doc_info-extended-column {
          display: flex;
          gap : 13%;
          flex-direction: row;
          line-height: normal;
          width: fit-content;
          margin-left: 0;
        }

        @media (max-width: 1317px){
          .own-profile-doc_info-extended-column {
           flex-direction : column;
          }

          .own-profile-state-field{
            margin-top : 5%;
            margin-left : 3% !important;
          }

          .own-profile-form{
            height : 86% !important;
            width : 115%;
          }
        }

        @media (max-width: 991px) {
          .own-profile-doc_info-extended-column {
            margin-top : 5%;
            flex-direction : row;
            width: 85%;
            gap : 14.5%;
          }
        }

        .own-profile-column-fields {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          font-size: 20px;
          font-weight: 600;
        }
        @media (max-width: 991px) {
          .own-profile-column-fields {
            width: 100%;
            flex-direction : row;
            max-width : 100%;
            margin-top: 40px;
          }
        }

        .own-profile-phone-field {
          display: flex;
          gap: 15%;
          width : 120%;
          color: #fff;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .own-profile-phone-field {
            align-items : center;
            max-width: 100%;
            flex-direction : row;
            padding-right: 20px;
            white-space: initial;
          }
        }

        .own-profile-phone-label {
          font-family: Manrope, sans-serif;
          margin: auto 0;
        }
        .phone-input {
          border-radius: 5px;
          background-color: #d9d9d9;
          width: 194px;
          height: 33px;
        }

        .own-profile-city-field {
          display: flex;
          margin-top: 17%;
          width : 118%;
          gap: 24%;
          color: #fff;
          white-space: nowrap;
        }

        .own-profile-city-label {
          font-family: Manrope, sans-serif;
          margin: auto 0;
        }

        .city-input {
          border-radius: 5px;
          background-color: #d9d9d9;
          width: 194px;
          height: 33px;
        }

        @media (max-width: 991px) {
          .own-profile-city-field {
            width: 100%;
            gap : 13%;
            padding-right: 20px;
            margin-top: 0;
            white-space: initial;
          }
        }

        @media(max-width : 767px){
          .own-profile-column-fields{
            gap : 12%;
          }

          .own-profile-phone-field{
            padding-right : 5%;
            gap : 20% !important;
          }

          .own-profile-phone-field{
            padding-right : 5%;
            gap : 13%;
          }
        }

        .own-profile-country-field {
          display: flex;
          flex-direction: row;
          white-space  nowrap;
          gap : 9%;
          width : 101%;
          font-size: 20px;
          color: #fff;
          font-weight: 600;
          white-space: nowrap;
        }

        @media (max-width: 991px) {
          .own-profile-country-field {
            gap : 16%;
            padding-right: 20px;
            white-space: initial;
          }
        }
        .own-profile-country-label {
          font-family: Manrope, sans-serif;
          flex-grow: 1;
          margin: auto 0;
        }
        .country-input {
          border-radius: 5px;
          background-color: #d9d9d9;
          width: 12rem;
          height: 2rem;
        }
        .own-profile-address-field {
          display: flex;
          margin-top: 3.5%;
          gap: 20px;
          flex-direction: row;
          font-size: 20px;
          color: #fff;
          font-weight: 600;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .own-profile-address-field {
            margin-top: 0;
            width : fit-content;
            gap : 11%;
            white-space: initial;
          }
        }
        .own-profile-address-label {
          font-family: Manrope, sans-serif;
          align-self: start;
          flex-grow: 1;
          margin-top : 9%;
        }
        .own-profile-address-input {
          border-radius: 5px;
          background-color: #d9d9d9;
          width: 20rem;
          height: 5em;
        }

        textarea{
          resize : none;
        }

        .own-profile-state-field {
          display: flex;
          gap: 17%;
          font-size: 20px;
          color: #fff;
          margin-left : 0%;
          font-weight: 600;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .own-profile-state-field {
            gap : 14%;
            align-items : center;
            margin : 0;
            white-space: initial;
          }
        }
        .state-label {
          font-family: Manrope, sans-serif;
          flex-grow: 1;
          margin: auto 0;
        }
        .state-input {
          border-radius: 5px;
          background-color: #d9d9d9;
          width: 194px;
          height: 33px;
        }

        .own-profile-doc-info{
          display : flex;
          flex-direction : row;
          justify-content : space-evenly;
        }

        @media(max-width : 991px){
          .own-profile-doc-info{
            display : grid;
            grid-template-columns : 1fr 1fr;
            grid-row-gap : 7%;
            grid-column-gap : 7%;
          }
        }

        @media(max-width : 767px){
          .own-profile-doc-info{
            padding-bottom : 5%;
          }

          .own-profile-card-container{
            margin-top : 0;
          }
        }

        .own-profile-submit-field{
          height : fit-content;
          align-self : flex-end;
          font-family: Manrope, sans-serif;
          border-radius: 5px;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          border: 3px solid #fff;
          background-color: #f0f0f0;
          color: #000;
          white-space: nowrap;
          padding: 6px 22px;
          margin-bottom : 2%;
        }

        .own-profile-submit-input{
          font-family: Manrope, sans-serif;
          border : none;
          font-size : 1.2rem;
          font-weight : 600;
          text-decoration : none;
          cursor : pointer;
        }

        @media(max-width : 991px){
          .own-profile-submit-field{
            justify-self : center;
            align-self : center;
            width : fit-content;
            grid-column : 2/3;
          }
        }
      `}</style>
    </>
  )
}

export default ViewParking;