import * as React from "react";

const CardStyles = () => (
  <style jsx>{`
        .feature-section {
          max-width: 780px;
          width: 100%;
          margin: 50px auto;
          display: flex;
          padding-left : 2.5%;
          gap: 15px;
        }

        @media (max-width: 991px) {
          .feature-section {
            max-width: 100%;
            margin-top: 30px;
            flex-direction: column;
            align-items: center;
            gap: 0;
          }
        }

        .feature-content {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0;
        }

        @media (max-width: 991px) {
          .feature-content {
            width: 80%;
            align-items: center;
            text-align: left;
            align-self: flex-start;
          }
        }

        .feature-text {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          font-size: 15px;
          color: #030303;
          font-weight: 400;
        }

        @media (max-width: 991px) {
          .feature-text {
            max-width: 40%;
            margin-top: 30px;
          }
        }

        .feature-label {
          color: #c1c1c1;
          font-family: Poppins, sans-serif;
        }

        .feature-title {
          margin-top: 8px;
          font: 700 32px Poppins, sans-serif;
        }

        .feature-description {
          font-family: Poppins, sans-serif;
          margin-top: 4px;
        }

        .feature-cta {
          display: flex;
          flex-direction: column;
          position: relative;
          fill: #141414;
          filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.08));
          overflow: hidden;
          align-self: flex-start;
          aspect-ratio: 3.77;
          margin-top: 40px;
          color: #fff;
          background : black;
          justify-content: center;
          padding: 12px 30px;
          font: 700 1.2rem Poppins, sans-serif;
        }

        @media (max-width: 991px) {
          .feature-cta {
            margin: 5px 0;
            padding: 6px 12px;
            align-self: flex-start;
          }
        }

        @media (max-width: 418px) {
          .feature-cta {
            margin: 5px 0;
            padding: 2px 3px;
            align-self: flex-end;
          }
        }

        .feature-cta-bg {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }

        .feature-cta-text {
          position: relative;
        }

        .feature-image-container {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 15px;
          padding: 0 20px;
        }

        @media (max-width: 991px) {
          .feature-image-container {
            max-width: fit-content;
            padding-right: 5%;
            margin: 0 auto;
          }
        }

        .feature-image {
          aspect-ratio: 1.28;
          object-fit: contain;
          width: 100%;
          align-self: stretch;
          margin: auto 0;
        }

        @media (max-width: 991px) {
          .feature-image {
            aspect-ratio: 1;
            max-width: 100%;
            margin: 0;
          }
        }
      `}</style>
)

function Card() {
  return (
    <>
      <section className="feature-section">
        <div className="feature-content">
          <div className="feature-text">
            <h2 className="feature-title">Effortless parking made possible</h2>
            <p className="feature-description">
              Our AI-powered approach ensures hassle-free parking experiences for
              all users.
            </p>
            <div className="feature-cta">
              <span className="feature-cta-text">Learn more</span>
            </div>
          </div>
        </div>
        <div className="feature-image-container">
          <img
            src="../images/card2_photo.png"
            alt="Feature illustration"
            className="feature-image"
          />
        </div>

        <CardStyles />
      </section>

      <section className="feature-section-2">
      <div className="feature-image-container feature-image-container-2b">
          <img
            src="../images/card1_photo.png"
            alt="Feature illustration"
            className="feature-image"
          />
        </div>
        <div className="feature-content-2">
          <div className="feature-text">
            <h2 className="feature-title">Simplicity at its best!</h2>
            <p className="feature-description">
              ParkAI offers AI-driven parking solutions for efficient management.
            </p>
            <div className="feature-cta-2">
              <span className="feature-cta-text-2">Learn more</span>
            </div>
          </div>
        </div>
        <div className="feature-image-container-2a">
          <img
            src="../images/card1_photo.png"
            alt="Feature illustration"
            className="feature-image"
          />
        </div>

        <CardStyles />

        <style jsx>{`
        .feature-section-2{
          max-width: 780px;
          width: 100%;
          margin: 50px auto;
          display: flex;
          padding-right : 2.5% !important;
          gap: 15px;
        }

        @media (max-width: 991px) {
          .feature-section-2 {
            max-width: 100%;
            margin-top: 30px;
            flex-direction: column;
            align-items: center;
            gap: 0;
          }
        }

        .feature-content-2 {
          text-align : right !important;
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0 !important;
        }

        @media (max-width: 991px) {
          .feature-content-2 {
            width: 80%;
            align-items: center;
            text-align: right !important;
            align-self: flex-end !important;
          }
        }

        .feature-cta-2 {
          display: flex;
          flex-direction: column;
          position: relative;
          fill: #141414;
          filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.08));
          overflow: hidden;
          align-self: flex-end !important;
          aspect-ratio: 3.77;
          margin-top: 40px;
          color: #fff;
          background : black;
          justify-content: center;
          padding: 12px 30px;
          font: 700 1.2rem Poppins, sans-serif;
        }

        @media (max-width: 991px) {
          .feature-cta-2 {
            margin: 5px 0;
            padding: 6px 12px;
            align-self: flex-end !important;
          }
        }

        @media (max-width: 418px) {
          .feature-cta-2 {
            margin: 5px 0;
            padding: 2px 3px;
            align-self: flex-end !important;
          }
        }

        .feature-image-container-2a {
          display: none !important;
        }

        @media (max-width: 991px) {
          .feature-image-container-2b {
            display: none !important;
          }

          .feature-image-container-2a {
            display: flex !important;
            flex-direction: column;
            line-height: normal;
            width: 50%;
            margin-left: 5% !important;
            padding: 0 20px;
          }
        }
        
        }
      `}</style>
      </section>

      <section className="feature-section">
        <div className="feature-content">
          <div className="feature-text">
            <h2 className="feature-title">Tailored solutions for every parking need</h2>
            <p className="feature-description">
              From small lots to large complexes, ParkAI has the right solutions for you.
            </p>
            <div className="feature-cta">
              <span className="feature-cta-text">Learn more</span>
            </div>
          </div>
        </div>
        <div className="feature-image-container">
          <img
            src="../images/card3_photo.png"
            alt="Feature illustration"
            className="feature-image"
          />
        </div>

        <CardStyles />
      </section>
    </>
  );
}

export default Card;