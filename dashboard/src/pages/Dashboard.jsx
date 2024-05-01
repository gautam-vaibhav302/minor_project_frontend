import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../sidebar'


const Dashboard = () => {
  return (
    <div>
         <section className="dash-page">
        <SideBar />
        <div className="dash-container">
          <Outlet/>
        </div>
      </section>
      <style jsx>{`
        .dash-page{
          display : grid;
          grid-template-columns: 1fr 3fr;
        }

        @media (max-width : 767px){
          .dash-page{
            display: flex;
            flex-direction : column;
          }
        }

        .dash-container {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 2rem;
        }
        @media (max-width: 991px) {
          .dash-container {
            padding: 0 20px;
          }
        }
    
      `}</style>
    </div>
  )
}

export default Dashboard