import * as React from "react";
import SideBar from "./sidebar";

function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <div className="welcome-text">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d5fc20bff3c6a4104063047afd2f5d0b594bb5a8a23fd334a04aae7d2b114a3?apiKey=185221ab61634e7baa33e5b4261af8f5&"
            className="welcome-image"
            alt="Welcome to ParkPoint"
          />
        </div>
        <div className="welcome-description">
          <h4 className="description-heading">
            Your personalized parking dashboard.
          </h4>
          <h4 className="description-text">
            Efficiently manage your parking spaces with just a few clicks. Take
            control of your slots, profile, and bookings seamlessly.
          </h4>
        </div>
      </div>
    </section>
  );
}

function FeatureList() {
  const features = [
    "Edit your profile details",
    "Enter the available slots",
    "Free up the Slots when needed",
    "Customize your park space info",
    "View real-time availability",
  ];

  return (
    <ul className="feature-list">
      {features.map((feature, index) => (
        <li key={index} className="feature-item">
          &gt; {feature}
        </li>
      ))}
    </ul>
  );
}

function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="feature-content">
        <div className="feature-text">
          <FeatureList />
        </div>
        <div className="feature-image-container">
          <img
            loading="lazy"
            src="images/parkwelcome2.png"
            className="feature-image"
            alt="ParkPoint Features"
          />
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <>
      <section className="main-page">
        <SideBar />
        <div className="welcome-container">
          <div className="content-wrapper">
            <h1 className="welcome-heading">Welcome to ParkPoint!</h1>
            <WelcomeSection />
            <FeatureSection />
          </div>
        </div>
      </section>
      <style jsx>{`
        .main-page{
          display : flex;
        }

        @media (max-width : 767px){
          .main-page{
            flex-direction : column;
          }
        }

        .welcome-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding: 2% 5%;
          background-color: #fff;
        }

        @media (max-width: 991px) {
          .welcome-container {
            padding: 0 20px;
          }
        }

        @media (max-width: 767px) {
          .welcome-container {
            margin-top : 10%;
          }
        }

        .content-wrapper {
          width: 100%;
          max-width: 1340px;
        }

        @media (max-width: 991px) {
          .content-wrapper {
            max-width: 100%;
          }
        }

        .welcome-section {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .welcome-section {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }

        .welcome-content {
          display: flex;
          gap: 5%;
        }

        @media (max-width: 991px) {
          .welcome-content {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }

        .welcome-text {
          padding : 2%;
          display: flex;
          flex-direction: column;
          width: 50%;
          line-height: normal;
        }

        @media (max-width: 991px) {
          .welcome-text {
            width: 100%;
          }
        }

        .welcome-heading {
          margin : auto;
          font-size: 48px;
          font-weight: 600;
          color: #000;
          font-family: Manrope, sans-serif;
        }

        @media (max-width: 991px) {
          .welcome-heading {
            max-width: 100%;
            margin-top: 40px;
            font-size: 40px;
          }
        }

        .welcome-image {
          align-self : flex-start;
          width: 100%;
          margin: 10% 2.5%;
        }

        @media (max-width: 991px) {
          .welcome-image {
            width : 80%;
            margin-top: 40px;
          }
        }

        .welcome-description {
          display: flex;
          flex-direction: column;
          min-width : 50%;
          width: 50%;
          font-family : Manrope, sans-serif;
          line-height: normal;
        }

        @media (max-width: 991px) {
          .welcome-description {
            width: 100%;
          }
        }

        .description-heading {
          color: #000;
          font-size : 1.7rem;
          margin: 25% 2.5% 10%;
        }

        @media (max-width: 991px) {
          .description-heading {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .description-text {
          margin: 15% 2.5% 10%;
          font-size : 1.5rem;
        }

        @media (max-width: 991px) {
          .description-text {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .feature-section {
          margin-top: 8px;
          width: 100%;
        }

        @media (max-width: 991px) {
          .feature-section {
            max-width: 100%;
          }
        }

        .feature-content {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .feature-content {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }

        .feature-text {
          display: flex;
          flex-direction: column;
          font-family : Manrope, sans-serif;
          width: 35%;
          margin-left: 0;
          line-height: normal;
        }

        @media (max-width: 991px) {
          .feature-text {
            width: 100%;
          }
        }

        .feature-list {
          padding : 0;
          list-style-type : none;
          display: flex;
          flex-direction: column;
          font-size: 1.5 rpm;
          font-weight: 600;
          color: #000;
          margin: auto 0;
          font-family: Manrope, sans-serif;
        }

        @media (max-width: 991px) {
          .feature-list {
            padding-left : 7.5%;
            margin-top: 40px;
          }

          .feature-item{
            margin : 5%;
            margin-left : 0;
          }
        }

        .feature-item {
          font-size : 1.35rem;
          align-self : flex-start;
          margin : 10% 5% 5% 0;
        }

        .feature-image-container {
          align-items : center;
          display: flex;
          flex-direction: row;
          width: 65%;
          margin-left: 1.5rem;
          line-height: normal;
          padding-left : 10%;
        }

        // @media (max-width: 991px) {
        //   .feature-image-container {
        //     width: 100%;
        //   }
        // }

        .feature-image {
          max-width: 85%;
          flex-grow: 1;
          // aspect-ratio: 1.75;
          object-position: center;
        }

        @media (max-width : 1279px){
          .feature-image-container}{
            paddding-left : 0;
          }

          .feature-image{
            max-width : 100%;
          }
        }

        @media (max-width: 991px) {
          .feature-image {
            max-width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default Welcome;