import React, { useState, useEffect } from 'react'
import './ViewAccountDetails.css'
import Dashboardbtn from '../dashBoardAcctBtn/dashBoardBtnAcct'
import {data} from './ViewAccountDetailJSON'

function ViewAccountDetails({makeTrue}) {
  const [accounts, setAccounts] = useState(data)



  const removeItem = (id) =>{
    setAccounts(prev =>
      prev.filter(account => {
        return account.id !== id
      }),
    );
  }

return (
    <div className="mgboardcontainer">
      <div className="mgboardheader">
        <div className="mgbordtitle">
          <h1>Bank Account</h1>
        </div>
        <div className="mgboardsubtitle" onClick = {makeTrue}>
          <p>Manage Bank accounts</p>
        </div>
      </div>
      
      {accounts.map(item=>{
        return  (   <div className='veiwAccContainer' key={item.id}>
        <div className="veiwAccText">
            <p>{item.bankname}</p>
            <p>{item.accountnumber}</p>
            <p>{item.accountname}</p>
        </div>
        <div className="viewAccBtn">
            <button onClick={removeItem.bind(null, item.id)}>Remove</button>
        </div>
            </div>)  

      })}



    
      <div onClick = {makeTrue}>
        <Dashboardbtn value="Add New Bank"/>
      </div>
    </div>
  )
}

export default ViewAccountDetails