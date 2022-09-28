import Dashboardbtn from "../dashBoardAcctBtn/dashBoardBtnAcct";
import "./ManageAccountDetails.css";
import ViewAccountDetails from "../ViewAccountDetails/ViewAccountDetails";
import { useState } from "react";
import Showcase from "../landingPage/Showcase";


function ManageAccountDetails() {

  const [show, setShow] = useState(true)

  const handleTrue = () =>{
    setShow(true)
  }

  return (
    <>
    {show && (<div className="mgboardcontainer">
      <div className="mgboardheader">
        <div className="mgbordtitle">
          <h1>Bank Account</h1>
        </div>
        <div className="mgboardsubtitle" onClick={()=>{setShow(false)}}>
          <p>View Bank accounts</p>
        </div>
      </div>

      <div className="mgboardform">
        <form>
          <label>
            <p>Bank Name</p>
            <select placeholder="Select Bank">
            <option value="" disabled selected>Select Bank</option>
              <option value="">Access Bank Plc</option>
              <option value="">Citibank Nigeria Limited</option>
              <option value="">Ecobank Nigeria Plc</option>
              <option value="">Fidelity Bank Plc</option>
              <option value="">First Bank Nigeria Limited</option>
              <option value="">First City Monument Bank Plc</option>
              <option value="">Globus Bank Limited</option>
              <option value="">Guaranty Trust Bank Plc</option>
              <option value="">Heritage Banking Company Ltd.</option>
              <option value="">Key Stone Bank</option>
              <option value="">Polaris Bank</option>
              <option value="">Providus Bank</option>
              <option value="">Stanbic IBTC Bank Ltd.</option>
              <option value="">Standard Chartered Bank Nigeria Ltd.</option>
              <option value="">Sterling Bank Plc</option>
              <option value="">SunTrust Bank Nigeria Limited</option>
              <option value="">Titan Trust Bank Ltd</option>
              <option value="">Union Bank of Nigeria Plc</option>
              <option value="">United Bank For Africa Plc</option>
              <option value="">Unity Bank Plc</option>
              <option value="">Wema Bank Plc</option>
              <option value="">Zenith Bank Plc</option>
            </select>
          </label>
          <label>
            <p>Account Name</p>
            <input placeholder="Account Name"></input>
          </label>
          <label>
            <p>Account Number</p>
            <input placeholder="Account Number" minLength={10} maxLength={10} /> 
          </label>
         <Dashboardbtn value="Add Bank"/>
        </form>
      </div>
    </div>)}

   {!show && (<div>
      <ViewAccountDetails makeTrue={handleTrue}/>
    </div>)}
    </>
  );
}

export default ManageAccountDetails;
