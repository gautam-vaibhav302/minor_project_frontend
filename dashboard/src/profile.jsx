import * as React from "react";
import SideBar from "./sidebar";

function InputField({ label, value, onChange, inType, id }) {
  return (
    <>
      <div className="input-field">
        <div className="input-label">
          {label}
        </div>
        <div className="input-value" >
          <input type={inType} name={id} id={id} className="input-box" />
        </div>
      </div>
      <style jsx>{`
        .input-field {
          width : max-content;
          display: flex;
          gap: 11px;
        }
        .input-label {
          font-family: Manrope, sans-serif;
          flex-grow: 1;
          margin: auto 0;
        }
        .input-value {
          align-items : center;
          border-radius: 5px;
          background-color: #d9d9d9;
          width: 12rem;
          height: 2rem;
        }

        .input-box{
          text-align : center;
          background : transparent;
          font-family : inherit;
          font-size : inherit;
          font-weight : inherit;
          color : #000;
          width : -webkit-fill-available;
          height : -webkit-fill-available;
          border-radius : 1px;
        }

        @media(max-width : 991px){
          .input-field{
            margin : 5% auto;
            width : 100%;
          }
        }
      `}</style>
    </>
  );
}

function DocCards({ imgSrc, cardDesc, id }) {
  return (
    <>
      <div className="card-container">
        <img src={imgSrc} alt="Profile Photo" className="card-photo" />
        <div className="card-footer">
          <div className="card-desc">{cardDesc}</div>
          <div className="card-button">
            <input type={"file"} name={id} id={id} hidden />
            <label htmlFor={id} className="submit-input">Upload</label>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card-container {
          align-self: flex-start;
          align-items : flex-start;
          display: flex;
          width: 19.6rem;
          max-width: 100%;
          flex-direction: column;
          font-size: 1.4rem;
          text-align: center;
          font-weight : 600;
        }
        @media (max-width: 991px) {
          .card-container {
            margin-top: 40px;
          }
        }
        .card-photo {
          aspect-ratio: 1.56;
          object-fit: cover;
          object-position: center;
          width: 100%;
          background : #f0f0f0;
          border-radius : 10px;
        }
        .card-footer {
          display: flex;
          margin : 5% auto;
          gap: 1.25rem;
        }
        .card-desc {
          color: #fff;
          font-family: Manrope, sans-serif;
          flex-grow: 1;
          margin: auto 0;
        }
        .card-button {
          font-family: Manrope, sans-serif;
          border-radius: 5px;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          border: 3px solid #fff;
          background-color: #f0f0f0;
          color: #000;
          white-space: nowrap;
          padding: 6px 22px;
          display : flex;
          align-items : center;
        }
        @media (max-width: 991px) {
          .card-button {
            white-space: initial;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}

function AddressField(pos) {
  return (
    <>
      <div className="extended-column">
        <div className="country-address-fields">
          <div className="address-field">
            <div className="address-label">Address</div>
            <div className="address-input" >
              <textarea type="text" name="address" id="address" className="input-box" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Profile() {
  const inputFields = [
    { label: "First Name", value: "", type: "text", id: "fname" },
    { label: "Last Name", value: "", type: "text", id: "lname" },
    { label: "Email ID", value: "", type: "email", id: "mailID" },
  ];

  return (
    <>
      <section className="main-page">
        <SideBar />
        <div className="container">
          <h1 className="title">Edit Profile</h1>
          <div className="profile-form-container">
          <div className="profile-form">
              <div className="input-fields">
                {inputFields.map((field, index) => (
                  <InputField
                    key={index}
                    label={field.label}
                    value={field.value}
                    onChange={() => { }}
                    inType={field.type}
                    id={field.id}
                  />
                ))}
              </div>
            <div className="additional-info">
              <div className="info-columns">
                <div className="column">
                  <div className="column-fields">
                    <div className="phone-field">
                      <div className="phone-label">Phone</div>
                      <div className="input-value" >
                        <div className="input-value" >
                          <input type="tel" name="phone" id="phone" className="input-box" />
                        </div>
                      </div>
                    </div>
                    <div className="city-field">
                      <div className="city-label">City</div>
                      <div className="input-value" >
                        <input type="text" name="city" id="city" className="input-box" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">

                  <div className="extended-column">
                    <div className="country-field">
                      <div className="country-label">Country</div>
                      <div className="input-value" >
                        <input type="text" name="country" id="country" className="input-box" />
                      </div>
                    </div>

                    <div className="state-field">
                      <div className="state-label">State</div>
                      <div className="input-value" >
                        <input type="text" name="state" id="state" className="input-box" />
                      </div>
                    </div>

                  </div>

                  <div className="extended-column">
                    <div className="address-field">
                      <div className="address-label">Address</div>
                      <div className="address-input" >
                        <textarea type="text" name="address" id="address" className="input-box" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="doc-info">
                <DocCards imgSrc={"images/addImage.png"} cardDesc={"Profile Photo"} id={"proPic"} />
                <DocCards imgSrc={"images/addFile.png"} cardDesc={"ID Proof"} id="idProof" />
                <div className="submit-field">
                  <button type={"submit"} className="submit-input">Submit</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .main-page{
          width : fit-content;
          display : flex;
        }

        @media (max-width : 767px){
          .main-page{
            flex-direction : column;
          }
        }

        .container {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 44px 50px 76px;
        }
        @media (max-width: 991px) {
          .container {
            padding: 0 20px;
          }
        }

        .title {
          color: #000;
          margin : 0 0 02.5%;
          width : fit-content;
          font: 600 2.5rem Manrope, sans-serif;
        }

        @media (max-width: 991px) {
          .title {
            max-width: 100%;
            margin-right: 10px;
            font-size: 40px;
          }
        }
        
        .profile-form-container{
          display : flex;
          flex-direction : column;
          height : 100%;
          width : 100%;
        }

        .profile-form {
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
          .profile-form {
            height : 86% !important;
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
            padding-bottom : 8%;
          }
        }

        @media (max-width: 767px) {
          .profile-form {
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

        .input-fields {
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
          .input-fields {
            display : grid;
            grid-template-columns : 1fr 1fr;
            grid-template-rows : 1fr 1fr;
            padding-top : 2.5%;
            width: 90%;
            gap : 10%;
            justify-content : space-between;
          }
        }
        .additional-info {
          margin-top: 47px;
        }
        @media (max-width: 991px) {
          .additional-info {
            max-width: 100%;
            margin-top: 0;
          }
        }
        .info-columns {
          display: flex;
          justify-content : flex-start;
          gap: 9%;
          padding-left : 1%;
          margin-bottom : 3%;
        }
        @media (max-width: 991px) {
          .info-columns {
            flex-direction: column;
            align-items: stretch;
            gap: 3%;
            padding-left : 1%;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: fit-content;
          margin-left: 0;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }

        .extended-column {
          display: flex;
          gap : 13%;
          flex-direction: row;
          line-height: normal;
          width: fit-content;
          margin-left: 0;
        }

        @media (max-width: 1317px){
          .extended-column {
           flex-direction : column;
          }

          .state-field{
            margin-top : 5%;
            margin-left : 3% !important;
          }

          .profile-form{
            height : 86% !important;
            width : 115%;
          }
        }

        @media (max-width: 991px) {
          .extended-column {
            margin-top : 5%;
            flex-direction : row;
            width: 85%;
            gap : 14.5%;
          }
        }

        .column-fields {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          font-size: 20px;
          font-weight: 600;
        }
        @media (max-width: 991px) {
          .column-fields {
            width: 100%;
            flex-direction : row;
            max-width : 100%;
            margin-top: 40px;
          }
        }

        .phone-field {
          display: flex;
          gap: 15%;
          width : 120%;
          color: #fff;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .phone-field {
            align-items : center;
            max-width: 100%;
            flex-direction : row;
            padding-right: 20px;
            white-space: initial;
          }
        }

        .phone-label {
          font-family: Manrope, sans-serif;
          margin: auto 0;
        }
        .phone-input {
          border-radius: 5px;
          background-color: #d9d9d9;
          width: 194px;
          height: 33px;
        }

        .city-field {
          display: flex;
          margin-top: 17%;
          width : 118%;
          gap: 24%;
          color: #fff;
          white-space: nowrap;
        }

        .city-label {
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
          .city-field {
            width: 100%;
            gap : 13%;
            padding-right: 20px;
            margin-top: 0;
            white-space: initial;
          }
        }

        @media(max-width : 767px){
          .column-fields{
            gap : 12%;
          }

          .phone-field{
            padding-right : 5%;
            gap : 20% !important;
          }

          .phone-field{
            padding-right : 5%;
            gap : 13%;
          }
        }

        .country-field {
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
          .country-field {
            gap : 16%;
            padding-right: 20px;
            white-space: initial;
          }
        }
        .country-label {
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
        .address-field {
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
          .address-field {
            margin-top: 0;
            width : fit-content;
            gap : 11%;
            white-space: initial;
          }
        }
        .address-label {
          font-family: Manrope, sans-serif;
          align-self: start;
          flex-grow: 1;
          margin-top : 9%;
        }
        .address-input {
          border-radius: 5px;
          background-color: #d9d9d9;
          width: 20rem;
          height: 5em;
        }

        textarea{
          resize : none;
        }

        .state-field {
          display: flex;
          gap: 17%;
          font-size: 20px;
          color: #fff;
          margin-left : 0%;
          font-weight: 600;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .state-field {
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

        .doc-info{
          display : flex;
          flex-direction : row;
          justify-content : space-evenly;
        }

        @media(max-width : 991px){
          .doc-info{
            display : grid;
            grid-template-columns : 1fr 1fr;
            grid-row-gap : 7%;
            grid-column-gap : 7%;
          }
        }

        @media(max-width : 767px){
          .doc-info{
            padding-bottom : 5%;
          }

          .card-container{
            margin-top : 0;
          }
        }

        .submit-field{
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

        .submit-input{
          font-family: Manrope, sans-serif;
          border : none;
          font-size : 1.2rem;
          font-weight : 600;
          text-decoration : none;
          cursor : pointer;
        }

        @media(max-width : 991px){
          .submit-field{
            justify-self : center;
            align-self : center;
            width : fit-content;
            grid-column : 2/3;
          }
        }
      `}</style>
    </>
  );
}

export default Profile;