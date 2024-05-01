import React from 'react'
import ReactDOM from 'react-dom/client'
import Welcome from './welcome.jsx'
import Profile from './parkProfile.jsx'
import UserProfile from './userProfile.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WelcomePage from './welcome.jsx'
import ViewParking from './viewPark.jsx'
import SideBar from './sidebar.jsx'
import Dashboard from './pages/Dashboard.jsx'


const router = createBrowserRouter([

  {
    path: "/",
    element: <Dashboard/>,
    children: [
      {
        index: true,
        element: <WelcomePage/>
      },
      {
        path: "/edit-profile",
        element: <UserProfile/>
      },
      {
        path: "/view-parking",
        element: <ViewParking/>
      },
      {
        path: "/edit-parking",
        element: <>edit parking</>
      },
      {
        path: "/fill-slot",
        element: <>fill slot</>
      },
      {
        path: "/free-slot",
        element: <>free slot</>
      },
      {
        path: "/settings",
        element: <>Settings</>
      },
      {
        path: "/sign-out",
        element: <>Signout</>
      }
    ]
  }
    ]
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
