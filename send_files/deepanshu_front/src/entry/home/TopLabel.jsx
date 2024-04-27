import * as React from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const NavItem = ({ label, href }) => (
  <li>
    <a href={href} className="nav-link">
      {label}
    </a>
  </li>
);

const Header = () => (
  <header className="header">
    <div className="header-content">
      <h1 className="logo">ParkAI</h1>
      <nav>
        <ul className="nav-list">
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
      </nav>
      <div className="header-actions">
      <button className="login-btn">
          Login
        </button>
        <button className="signup-btn">
          Sign up
        </button>
      </div>
    </div>
    <hr className="header-divider" />
  </header>
);

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <div className="hero-text">
        <h2 className="hero-title">
          <span>Manage your parking space</span>
        </h2>
        <div className="hero-subtitle">
          <p>Experience seamless parking</p>
          <p>management</p>
        </div>
        <div className="hero-btn">
          <button className="cta-btn"> Get started </button>
        </div>
      </div>
      <div className="hero-image">
        <img src="../images/park_system.png" />
      </div>
    </div>
  </section>
);

function TopLabel() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
      </div>

      <style jsx>{`
        .container {
          background-color: #f0f0f0;
          box-shadow: 0 0 0 rgba(0, 0, 0, 0.08);
          align-self: stretch;
          align-items: center;
          max-width: 100%;
          padding: 0 60px 80px;
        }

        @media (max-width: 990px) {
          .container {
            display: flex;
            width: 100%;
            flex-direction: column;
            padding: 0 20px;
          }
        }

        .header {
          display: flex;
          margin-bottom: 65px;
          width: 100%;
          flex-direction: column;
        }

        @media (max-width: 991px) {
          .header {
            max-width: 100%;
            margin-bottom: 40px;
          }
        }

        .header-content {
          background-color: #fff;
          box-shadow: 0 0 0 rgba(0, 0, 0, 0.08);
          display: flex;
          padding: 30px 29px 15px;
          justify-content: space-between;
          align-items: center;
          font-size: 16px;
        }

        @media (max-width: 991px) {
          .header-content {
            max-width: 100%;
            flex-wrap: wrap;
            gap: 20px;
          }
        }

        .logo {
          font: 700 32px Poppins, sans-serif;
          color: #030303;
          margin: 0;
        }

        .nav-list {
          display: flex;
          gap: 20px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        @media (max-width: 991px) {
          .nav-list {
            flex-wrap: wrap;
          }
        }

        .nav-link {
          font-family: Poppins, sans-serif;
          color: #030303;
          text-decoration: none;
        }

        .header-actions {
          display: flex;
        }

        .avatar {
          width: 40px;
          height: 40px;
          
          border-radius: 50%;
          object-fit: cover;
        }

        .signup-btn {
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

        .login-btn {
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
          .signup-btn {
            padding: 15px 30px;
          }

          .login-btn {
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

        .header-divider {
          background-color: #f0f0f0;
          border: none;
          height: 1px;
          margin: 30px 0 0;
        }

        .hero {
          margin-top: 40px;
        }

        @media (max-width: 991px) {
          .hero {
            margin-top: 40px;
          }
        }

        .hero-content {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .hero-content {
            flex-direction: column;
          }
        }

        .hero-text {
          flex: 1;
        }

        .hero-image{
          height: fit-content;
          width: fit-content !important;
        }

        .hero-title {
          padding-left: 20px;
          font: 700 52px/1.2 Poppins, sans-serif !important;
          color: #030303;
          margin: 0 !important;
        }

        @media (max-width: 991px) {
          .hero-title {
            font-size: 40px !important;
          }
        }

        .hero-title span {
          display: block !important;
        }

        .hero-subtitle {
          padding-left: 20px;
          font: 400 24px Poppins, sans-serif;
          color: #030303;
          margin: 50px 0 0;
        }

        @media (max-width: 991px) {
          .hero-subtitle {
            margin-top: 30px;
          }
        }

        .hero-subtitle p {
          margin: 0;
        }

        .hero-subtitle p + p {
          margin-top: 10px;
        }

        .hero-btn{
          margin: 50px 0 0;
          padding-left: 20px;
        }

        .cta-btn {
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
          .cta-btn {
            margin-top: 30px;
            margin-bottom : 15px;
            padding: 20px 40px;
          }
        }

        .cta-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }

        .hero-img {
          width: 40%;
          object-fit: contain;
        }

        @media (max-width: 991px) {
          .hero-img {
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