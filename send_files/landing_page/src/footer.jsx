import * as React from "react";

const FooterColumn = ({ title, links }) => (
  <div className="footer-column">
    <h3 className="column-title">{title}</h3>
    <ul className="column-links">
      {links.map((link, index) => (
        <li key={index} className="column-link">
          {link}
        </li>
      ))}
    </ul>
  </div>
);

function Footer() {
  const footerColumns = [
    {
      title: "ParkAI",
      links: ["2024 © ParkAI", "All rights reserved."],
    },
    {
      title: "Navigation",
      links: ["Home", "Features", "About us", "Contact"],
    },
    {
      title: "Social Media",
      links: ["Facebook", "Instagram", "Twitter", "Linkedin"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms Of Service"],
    },
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          {footerColumns.map((column, index) => (
            <FooterColumn key={index} title={column.title} links={column.links} />
          ))}
        </div>
      </footer>
      <style jsx>{`
        .footer {
          background-color : #f0f0f0;
          width: 100%;
          margin-top: 44px;
        }

        @media (max-width: 991px) {
          .footer {
            margin-top: 40px;
          }
        }

        .footer-content {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .footer-content {
            flex-direction: column;
            gap: 0;
          }
        }

        .footer-column {
          flex: 1;
        }

        .column-title {
          font-size: 16px;
          font-weight: 700;
          color: #030303;
          font-family: Poppins, sans-serif;
          margin-bottom: 26px;
        }

        .column-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .column-link {
          font-size: 16px;
          font-weight: 400;
          color: #030303;
          font-family: Poppins, sans-serif;
          margin-bottom: 11px;
        }
      `}</style>
    </>
  );
}

export default Footer;