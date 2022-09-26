import React from 'react'
import './ViewAccountDetails.css'
import Dashboardbtn from '../dashboardbtn/dashboardbtn'
import AccountDetailsBox from '../accountDetailsBox/accountDetailsBox'

function ViewAccountDetails() {
  return (
    <div className="mgboardcontainer">
      <div className="mgboardheader">
        <div className="mgbordtitle">
          <h1>Bank Account</h1>
        </div>
        <div className="mgboardsubtitle">
          <a href="/">View Bank accounts</a>
        </div>
      </div>
      <div className='veiwAccContainer'>
<div className="veiwAccText">
    <p>First Name</p>
    <p>3170087553</p>
    <p>Babatunde Ola</p>
</div>
<div className="viewAccBtn">
    <button>Remove</button>
</div>
    </div>

    <div className='veiwAccContainer'>
<div className="veiwAccText">
    <p>First Name</p>
    <p>3170087553</p>
    <p>Babatunde Ola</p>
</div>
<div className="viewAccBtn">
    <button>Remove</button>
</div>
    </div>

    
      <Dashboardbtn value="Add New Bank"/>
    </div>
  )
}

export default ViewAccountDetails