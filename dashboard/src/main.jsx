import React from 'react'
import ReactDOM from 'react-dom/client'
import SideBar from './sidebar.jsx'
import Welcome from './welcome.jsx'
import Profile from './profile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>,
)
