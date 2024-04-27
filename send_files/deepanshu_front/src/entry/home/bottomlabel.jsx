import * as React from "react";

function BottomLabel() {
    return (
        <>
            <section className="bottom-section">
                <section className="parking-hero">
                    <h1 className="parking-hero-title">
                        Start your journey to efficient parking
                    </h1>
                </section>

                <section className="experts-section">
                    <h2 className="experts-heading">
                        Meet our experts to elevate your parking management experience.
                    </h2>
                </section>

                <button className="div"> Get Started </button>
            </section>

            <style jsx>{`
        .bottom-section{
            text-align : center;
        }

        .parking-hero {
          margin-top: 272px;
          text-align: center;
        }

        .parking-hero-title {
          color: #030303;
          font: 700 42px Poppins, sans-serif;
        }

        @media (max-width: 991px) {
          .parking-hero {
            margin-top: 40px;
          }

          .parking-hero-title {
            max-width: 100%;
          }
        }

        .experts-section {
            margin-top: 41px;
        }

        .experts-heading {
            color: #030303;
            font: 400 20px Poppins, sans-serif;
        }

        @media (max-width: 991px) {
            .experts-section {
                margin-top: 40px;
            }
        }

        .div {
            // aspect-ratio: 4.72;
            margin-top: 2%;
            width: fit-content;
            align-items: center;
            background-color : #000;
            color: #fff;
            justify-content: center;
            padding: 0.8% 1.8% ;
            font: 700 16px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
            .div {
                margin-top: 5%;
                padding: 0.8% 1.7%;
            }
        }
        .img {
            position: absolute;
            inset: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
        .div-2 {
        position: relative;
        }
      `}</style>
        </>
    );
}

export default BottomLabel;