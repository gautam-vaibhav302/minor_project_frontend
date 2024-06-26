import * as React from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const LandNavItem = ({ label, href }) => (
  <li>
    <a href={href} className="land-nav-link">
      {label}
    </a>
  </li>
);

const LandTopHeader = () => (
  <header className="land-top-header">
    <div className="land-top-header-content">
      <h1 className="brand-logo">ParkAI</h1>
      <nav>
        <ul className="land-nav-list">
          {navItems.map((item) => (
            <LandNavItem key={item.label} {...item} />
          ))}
        </ul>
      </nav>
      <div className="land-top-header-actions">
      <button className="land-login-btn">
          Login
        </button>
        <button className="land-signup-btn">
          Sign up
        </button>
      </div>
    </div>
    <hr className="land-top-header-divider" />
  </header>
);

const LandWelcome = () => (
  <section className="land-welcome">
    <div className="land-welcome-content">
      <div className="land-welcome-text">
        <h2 className="land-welcome-title">
          <span>Manage your parking space</span>
        </h2>
        <div className="land-welcome-subtitle">
          <p>Experience seamless parking</p>
          <p>management</p>
        </div>
        <div className="land-welcome-btn">
          <button className="land-welcome-btn"> Get started </button>
        </div>
      </div>
      <div className="land-welcome-image">
        <img src="../images/park_system.png" />
      </div>
    </div>
  </section>
);

function TopLabel() {
  return (
    <>
      <div className="land-container">
        <LandTopHeader />
        <LandWelcome />
      </div>

      <style jsx>{`
        .land-container {
          background-color: #f0f0f0;
          box-shadow: 0 0 0 rgba(0, 0, 0, 0.08);
          align-self: stretch;
          align-items: center;
          max-width: 100%;
          padding: 0 60px 80px;
        }

        @media (max-width: 990px) {
          .land-container {
            display: flex;
            width: 100%;
            flex-direction: column;
            padding: 0 20px;
          }
        }

        .land-top-header {
          display: flex;
          margin-bottom: 65px;
          width: 100%;
          flex-direction: column;
        }

        @media (max-width: 991px) {
          .land-top-header {
            max-width: 100%;
            margin-bottom: 40px;
          }
        }

        .land-top-header-content {
          background-color: #fff;
          box-shadow: 0 0 0 rgba(0, 0, 0, 0.08);
          display: flex;
          padding: 30px 29px 15px;
          justify-content: space-between;
          align-items: center;
          font-size: 16px;
        }

        @media (max-width: 991px) {
          .land-top-header-content {
            max-width: 100%;
            flex-wrap: wrap;
            gap: 20px;
          }
        }

        .brand-logo {
          font: 700 32px Poppins, sans-serif;
          color: #030303;
          margin: 0;
        }

        .land-nav-list {
          display: flex;
          gap: 20px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        @media (max-width: 991px) {
          .land-nav-list {
            flex-wrap: wrap;
          }
        }

        .land-nav-link {
          font-family: Poppins, sans-serif;
          color: #030303;
          text-decoration: none;
        }

        .land-top-header-actions {
          display: flex;
        }

        .land-signup-btn {
          position: relative;
          font-family: Poppins, sans-serif;
          font-weight: 700;
          color: #fff;
          background: black;
          border: none;
          padding: 17px 38px;
          cursor: pointer;
          overflow: hidden;
        }

        .land-login-btn {
          position: relative;
          font-family: Poppins, sans-serif;
          font-weight: 700;
          color: #000;
          background: #fff;
          padding: 17px 38px;
          cursor: pointer;
          overflow: hidden;
        }

        @media (max-width: 991px) {
          .land-signup-btn {
            padding: 15px 30px;
          }

          .land-login-btn {
            padding: 15px 30px;
          }
        }

        .signup-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }

        .land-top-header-divider {
          background-color: #f0f0f0;
          border: none;
          height: 1px;
          margin: 30px 0 0;
        }

        .land-welcome {
          margin-top: 40px;
        }

        @media (max-width: 991px) {
          .land-welcome {
            margin-top: 40px;
          }
        }

        .land-welcome-content {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .land-welcome-content {
            flex-direction: column;
          }
        }

        .land-welcome-text {
          flex: 1;
        }

        .land-welcome-image{
          height: fit-content;
          width: fit-content !important;
        }

        .land-welcome-title {
          padding-left: 20px;
          font: 700 52px/1.2 Poppins, sans-serif !important;
          color: #030303;
          margin: 0 !important;
        }

        @media (max-width: 991px) {
          .land-welcome-title {
            font-size: 40px !important;
          }
        }

        .land-welcome-title span {
          display: block !important;
        }

        .land-welcome-subtitle {
          padding-left: 20px;
          font: 400 24px Poppins, sans-serif;
          color: #030303;
          margin: 50px 0 0;
        }

        @media (max-width: 991px) {
          .land-welcome-subtitle {
            margin-top: 30px;
          }
        }

        .land-welcome-subtitle p {
          margin: 0;
        }

        .land-welcome-subtitle p + p {
          margin-top: 10px;
        }

        .land-welcome-btn{
          margin: 50px 0 0;
          padding-left: 20px;
        }

        .land-welcome-btn {
          position: relative;
          font: 700 16px Poppins, sans-serif;
          color: #fff;
          background: black;
          border: none;
          padding: 23px 60px;
          margin-top: 48px;
          margin-bottom: 20px;
          cursor: pointer;
          overflow: hidden;
        }

        @media (max-width: 991px) {
          .land-welcome-btn {
            margin-top: 30px;
            margin-bottom : 15px;
            padding: 20px 40px;
          }
        }

        .land-welcome-img {
          width: 40%;
          object-fit: contain;
        }

        @media (max-width: 991px) {
          .land-welcome-img {
            width: 100%;
            margin-top: 30px;
          }
        }

        .parking-img {
          width: 270px;
          max-width: 100%;
          margin-top: 40px;
          object-fit: contain;
        }
      `}</style>
    </>
  );
}

export default TopLabel;