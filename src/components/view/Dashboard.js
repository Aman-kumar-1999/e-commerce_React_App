
import React from 'react'
import '../css/Dashboard.css'
import Sidebar from '../../pages/view/Sidebar'
import DashboardCards from '../../pages/view/DashboardCard'
import DashboardGraph from '../../pages/view/DashboardGraphs'
function Dashboard(userData) {

  return (
    <>
    {/* <h1>Your Dashboard</h1> */}
      {/* <div style={{ background: 'red' }}> */}

        <DashboardCards />

        <DashboardGraph />
        
      {/* </div> */}
    </>
  )
}

export default Dashboard
