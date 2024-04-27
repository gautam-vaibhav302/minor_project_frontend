import * as React from "react";
import { useState } from "react";

function IconImage({ src, alt }) {
  return <img loading="lazy" src={src} alt={alt} className="sidebar-icon-image" />;
}

function SideMenuItem({ icon, label, onClick }) {
  return (
    <div className="side-menu-item" onClick={onClick}>
      <IconImage src={icon} alt="" />
      <div className="side-menu-label">{label}</div>
    </div>
  );
} 

function SideProfileSection() {
  return (
    <div className="side-profile-section">

      <div className="side-profile-header">
        <IconImage src="logos/profile.png" alt="" />
        <div className="side-settings-label">Profile</div>
      </div>

      <div className="side-profile-info">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4b920a5ff3464d5a591fb8d6e32799cf458142691723826b998a975a8f70888?apiKey=185221ab61634e7baa33e5b4261af8f5&" alt="Profile picture of John Smith" />
        <div className="profile-details">
          <div className="side-profile-name">John Smith</div>
          <div className="side-profile-email">johnsmith@email.com</div>
        </div>
      </div>

      <div className="side-profile-settings">
        <IconImage src="logos/settings.png" alt="" />
        <div className="side-settings-label">Settings</div>
      </div>

      <div className="side-profile-settings">
        <IconImage src="logos/logout.png" alt="" />
        <div className="side-settings-label">Sign Out</div>
      </div>

    </div>
  );
}

function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>

      <div className={`sidebar-container`}>

        <div className="sidehead" onClick={toggleSidebar}>
          <img src={"https://cdn.builder.io/api/v1/image/assets/TEMP/e97864e041db41bc26ee1f82706998cd3701f3dace2016e101fbca5f0d4cbf38?apiKey=185221ab61634e7baa33e5b4261af8f5&"} alt="" className="sidehead-logo" />
          <div className="sidehead-label">ParkAI</div>
        </div>

        <nav className={`sidebar ${isSidebarOpen ? "sidebar-open open" : ""}`}>

          <div className="sidebar-menu">

            <SideMenuItem icon="logos/editProfile.png" label="Edit Profile" />

            <SideMenuItem icon="logos/editParking.png" label="Edit Parking" />

            <SideMenuItem icon="logos/fillSlot.png" label="Fill Slot" />

            <SideMenuItem icon="logos/freeSlot.png" label="Free Slot" />

            <SideMenuItem icon="logos/viewParking.png" label="View Parking" />

          </div>

          <div className="side-profile-divider"> </div>

          <SideProfileSection />

        </nav>
      </div>

      <style jsx>{`
        html, body {
          height: 100%;
          margin: 0;
        }

        .sidebar-container {
          box-shadow: 0px 0px 2px 0px rgba(23, 26, 31, 0.12),
            0px 0px 1px 0px rgba(23, 26, 31, 0.07);
          background-color: #f0f0f0;
          flex-grow: 1;
          height : 100%;
        }

        @media (max-width: 767px) {
          .sidebar-container{
            width : 100%;
          }

          .sidebar-container.sidebar-open {
            overflow: hidden;
          }
        }

        .side-profile-divider{
          display : flex;
          width : 100%;
          max-width : 375px;
          align-items : center;
          border-top : 2px solid black;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          align-items: start;
          color: #171a1f;
          padding: 0 57px 0 25px;
          transition: transform 0.3s ease-in-out;
        }

        @media (max-width: 991px) {
          .sidebar {
            padding: 0 20px;
          }
        }

        .sidebar-menu {
          background-color: rgba(0, 0, 0, 0);
          display: flex;
          flex-direction : column;
          align-self : flex-start;
          margin-top : 10%;
          width : 100%;
          padding : 5% 2%;
        }

        @media (max-width: 991px) {
          .sidebar-menu {
            margin-left: 5px;
          }
        }

        .side-menu-item {
          margin : 5%;
          display: flex;
          gap: 12px;
          align-items: center;
          border-radius: 4px;
          background-color: rgba(0, 0, 0, 0);
          font-size: 1.2rem;
          line-height: 157%;
          padding: 5%;
          cursor: pointer;
        }

        @media(max-width : 767px){
          .side-menu-item{
            margin : auto 0;
          }
        }

        .sidehead {
          display: flex;
          gap: 12px;
          align-items: center;
          align-self : center;
          line-height: 157%;
          padding: 9px 19px;
          padding-top : 2.5rem;
          padding-left : 2.5rem;
          cursor: pointer;
        }

        @media (max-width: 767px) {
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #f0f0f0;
            z-index: 100;
            transform: translateX(-100%);
            padding: 15% 5% 5% !important;
          }

          .sidebar.open {
            overflow : scroll;
            transform: translateX(0);
          }
        }

        @media (max-width: 767px){
          .sidehead{
            position : fixed;
            margin : 0 auto 5%;
            padding : 5%;
            padding-left : 25%;
            background : #f0f0f0;
            z-index : 200;
          }

          .sidehead-label{
            font-size : 2.8rem !important;
          }
        }

        .sidehead-label{
          font-family : Manrope, sans-serif;
          font-size : 2.2rem;
        }

        .sidehead-logo {
          width: auto;
          height: auto;
        }

        .sidebar-icon-image {
          width: 20px;
          height: 20px;
        }

        .side-menu-label {
          font-family: Manrope, sans-serif;
        }

        .sidebar-image {
          width: 172px;
          border-radius: 4px;
          align-self: center;
          margin-top: 14px;
        }

        .view-item {
          display: flex;
          gap: 12px;
          align-items: center;
          border-radius: 4px;
          background-color: rgba(0, 0, 0, 0);
          font-size: 17px;
          line-height: 153%;
          padding: 10px 19px;
          margin-top: 15px;
        }

        .view-label {
          font-family: Manrope, sans-serif;
        }

        .edit-label {
          margin-top: 51px;
          font: 14px/157% Manrope, sans-serif;
        }

        @media (max-width: 991px) {
          .edit-label {
            margin-top: 40px;
          }
        }

        .spaces-list {
          display: flex;
          width: 144px;
          max-width: 100%;
          flex-direction: column;
          font-size: 14px;
          line-height: 157%;
          margin: 23px 0 0 10px;
        }

        .inactive-space {
          display: flex;
          gap: 12px;
          align-items: center;
          border-radius: 4px;
          background-color: rgba(0, 0, 0, 0);
          color: #9095a1;
          padding: 9px 19px;
          margin-top: 9px;
        }

        .space-label {
          font-family: Manrope, sans-serif;
        }

        .operations-label {
          align-self: center;
          margin-top: 31px;
          font: 14px/157% Manrope, sans-serif;
        }

        .side-profile-section {
          display: flex;
          margin: 5% auto 25%;
          flex-direction: column;
          align-items: start;
        }

        @media (max-width: 767px) {
          .side-profile-section {
            margin: 5% 2%;
            padding-bottom : 7.5%;
          }
        }

        .side-profile-info {
          display: flex;
          gap: 12px;
          align-items: center;
          border-radius: 4px;
          box-shadow: 0px 0px 2px 0px rgba(23, 26, 31, 0.12),
            0px 0px 1px 0px rgba(23, 26, 31, 0.07);
          background-color: #fffeff;
          width: 90%;
          padding: 8px 20px;
        }

        .profile-details {
          display: flex;
          flex-direction: column;
          margin-top: 7px;
        }

        .side-profile-name {
          color: #9095a1;
          font: 14px/157% Manrope, sans-serif;
        }

        .side-profile-email {
          color: #171a1f;
          margin-top: 11px;
          font: 13px/169% Manrope, sans-serif;
        }

        .side-profile-settings {
          display: flex;
          gap: 16px;
          align-items: center;
          font-size: 1.2rem;
          color: #171a1f;
          line-height: 157%;
          margin: 10% 5%;
        }

        .side-profile-header {
          display: flex;
          gap: 16px;
          align-items: center;
          font-size: 1.6rem;
          color: #171a1f;
          line-height: 157%;
          padding-left : 10%;
          margin: 5% 5% 10%;
        }

        // @media (max-width: 767px) {
        //   .side-profile-settings {
        //     margin: 40px 0 0 10px;
        //   }

        //   .side-profile-header {
        //     margin: 40px 0 0 10px;
        //   }
        // }

        .side-settings-label {
          font-family: Manrope, sans-serif;
        }

        .sign-out {
          display: flex;
          gap: 16px;
          align-items: center;
          font-size: 1.2rem;
          color: #171a1f;
          line-height: 157%;
          margin: 10% 5%;
        }

        @media (max-width: 991px) {
          .sign-out {
            margin-left: 10px;
          }
        }

        .sign-out-label {
          font-family: Manrope, sans-serif;
        }
      `}</style>
    </>
  );
}

export default SideBar;