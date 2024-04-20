import * as React from "react";

function Insight() {
  return (
    <>
      <section className="insights-section">
        <div className="insights-header">
          <h2 className="insights-title">Discover our latest insights</h2>
          <p className="insights-description">
            Stay informed with our industry articles and updates.
          </p>
          <div className="insights-articles">
            <div className="insights-articles-row">

              <article className="insights-article">
                <div className="insights-article-image-container">
                  <img loading="lazy" src="images/insights1.png" className="insights-article-image" />
                </div>
                <div className="insights-article-content">
                  <h3 className="insights-article-title"> Optimizing parking strategies </h3>
                  <p className="insights-article-text"> Maximize your parking space efficiency with AI-driven soultions. </p>

                  <p className="insights-article-author">Parking Expert </p>
                  <p className="insights-article-author-title"> Technology Enthusiast</p>
                </div>
              </article>

              <article className="insights-article">
                <div className="insights-article-image-container">
                  <img loading="lazy" src="images/insights2.png" className="insights-article-image" />
                </div>
                <div className="insights-article-content">
                  <h3 className="insights-article-title"> Driving innovation </h3>
                  <p className="insights-article-text"> Innovation is the key to revolutionizing parking operations. </p>

                  <p className="insights-article-author"> Innovation Officer </p>
                  <p className="insights-article-author-title"> Operations Manager </p>
                </div>
              </article>

              <article className="insights-article">
                <div className="insights-article-image-container">
                  <img loading="lazy" src="images/insights3.png" className="insights-article-image" />
                </div>
                <div className="insights-article-content">
                  <h3 className="insights-article-title">Balancing work</h3>
                  <p className="insights-article-text"> Achieve harmony  between work and managing parking facilities.</p>

                  <p className="insights-article-author"> Parking Manager </p>
                  <p className="insights-article-author-title"> Wellness Advocate </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
      .insights-section {
        background-color: rgba(20, 20, 20, 1);
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.08);
        align-self: stretch;
        display: flex;
        margin-top: 216px;
        max-width: 100%;
        flex-direction: column;
        align-items: center;
        padding: 80px 60px 0;
      }
      @media (max-width: 991px) {
        .insights-section {
          max-width: 100%;
          margin-top: 40px;
          padding: 0 20px;
        }
      }
      .insights-header {
        z-index: 10;
        display: flex;
        width: 100%;
        max-width: 1040px;
        flex-direction: column;
        align-items: center;
        margin: 32px 0 -143px;
      }
      @media (max-width: 991px) {
        .insights-header {
          max-width: 100%;
          margin-bottom: 10px;
        }
      }
      .insights-title {
        color: #fff;
        font: 700 52px Poppins, sans-serif;
      }
      @media (max-width: 991px) {
        .insights-title {
          max-width: 100%;
          font-size: 40px;
        }
      }
      .insights-description {
        color: #fff;
        margin-top: 40px;
        font: 400 24px Poppins, sans-serif;
      }
      @media (max-width: 991px) {
        .insights-description {
          max-width: 100%;
        }
      }
      .insights-articles {
        align-self: stretch;
        margin-top: 105px;
        width: fit-conte;
      }
      @media (max-width: 991px) {
        .insights-articles {
          max-width: 100%;
          margin-top: 40px;
        }
      }
      .insights-articles-row {
        gap: 20px;
        display: flex;
      }
      @media (max-width: 991px) {
        .insights-articles-row {
          flex-direction: column;
          align-items: stretch;
          gap: 0px;
        }
      }
      .insights-article {
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 33%;
        margin-left: 0px;
      }
      @media (max-width: 991px) {
        .insights-article {
          width: 100%;
        }
      }
      .insights-article-image-container {
        disply: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
        display: flex;
        font-size: 20px;
        color: #030303;
        font-weight: 400;
      }
      @media (max-width: 991px) {
        .insights-article-image-container {
          margin-top: 40px;
        }
      }
      .insights-article-background {
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        color : #f0f0f0;
        object-fit: cover;
        object-position: center;
      }
      .insights-article-image {
        aspect-ratio: 1.79;
        object-fit: auto;
        object-position: center;
        width: 100%;
        fill: url(<path-to-image>) lightgray 0px -7.846px / 100% 109.074%
          no-repeat;
      }
      .insights-article-content {
        background-color : #f0f0f0;
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 0 30px;
      }
      @media (max-width: 991px) {
        .insights-article-content {
          padding: 0 20px;
        }
      }
      .insights-article-title {
        font: 24px Poppins, sans-serif;
      }
      .insights-article-text {
        font-family: Poppins, sans-serif;
        margin-top: 6px;
      }
      .insights-article-author {
        margin-top: 59px;
        font: 700 16px Poppins, sans-serif;
      }
      @media (max-width: 991px) {
        .insights-article-author {
          margin-top: 40px;
        }
      }
      .insights-article-author-title {
        margin-top: 8px;
        font: 14px Poppins, sans-serif;
      }
    `}</style>
    </>
  );
}

export default Insight;