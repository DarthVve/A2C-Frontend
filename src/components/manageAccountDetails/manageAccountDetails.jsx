import Dashboardbtn from "../dashBoardAcctBtn/dashBoardBtnAcct";
import "./manageAccountDetails.css";
import { ViewAccountDetails } from "../../components";
import { useState } from "react";
import axios from '../../axios';
import { toast } from "react-toastify";
import BankAccountModal from "../BankAccountModal/BankAccountModal";


function ManageAccountDetails() {

  const [show, setShow] = useState(true)
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState({
    name: '',
    bank: '',
    number: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setDetails({ ...details, [name]: value });
  }
  
  const addAccount = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/account/add', {...details})
      if (res.status === 201) {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 2000)
      } else {
        toast.error(res.data.msg);
      }
    }
    catch(err) {
        toast.error(err.response?.data?.msg || "Something went wrong");
    }
  }

  const handleTrue = () =>{
    setShow(true)
  }

  return (
    <>
    {showModal && <BankAccountModal />}
    {show && (<div className="mgboardcontainer">
      <div className="mgboardheader">
        <div className="mgbordtitle">
          <h3>Bank Account</h3>
        </div>
        <div className="mgboardsubtitle" onClick={()=>{setShow(false)}}>
          <p>View Bank accounts</p>
        </div>
      </div>

      <div className="mgboardform">
        <form onSubmit={addAccount}>
          <label>
            <p>Bank Name</p>
            <select placeholder="Select Bank" value={details.bank} onSelect={handleChange}>
            <option value="" disabled selected>Select Bank</option>
              <option value="Access Bank Plc">Access Bank Plc</option>
              <option value="Citibank Nigeria Limited">Citibank Nigeria Limited</option>
              <option value="Ecobank Nigeria Plc">Ecobank Nigeria Plc</option>
              <option value="Fidelity Bank Plc">Fidelity Bank Plc</option>
              <option value="First Bank Nigeria Limited">First Bank Nigeria Limited</option>
              <option value="First City Monument Bank Plc">First City Monument Bank Plc</option>
              <option value="Globus Bank Limited">Globus Bank Limited</option>
              <option value="Guaranty Trust Bank Plc">Guaranty Trust Bank Plc</option>
              <option value="Heritage Banking Company Ltd.">Heritage Banking Company Ltd.</option>
              <option value="Key Stone Bank">Key Stone Bank</option>
              <option value="Polaris Bank">Polaris Bank</option>
              <option value="Providus Bank">Providus Bank</option>
              <option value="Stanbic IBTC Bank Ltd.">Stanbic IBTC Bank Ltd.</option>
              <option value="Standard Chartered Bank Nigeria Ltd.">Standard Chartered Bank Nigeria Ltd.</option>
              <option value="Sterling Bank Plc">Sterling Bank Plc</option>
              <option value="SunTrust Bank Nigeria Limited">SunTrust Bank Nigeria Limited</option>
              <option value="Titan Trust Bank Ltd">Titan Trust Bank Ltd</option>
              <option value="Union Bank of Nigeria Plc">Union Bank of Nigeria Plc</option>
              <option value="United Bank For Africa Plc">United Bank For Africa Plc</option>
              <option value="Unity Bank Plc">Unity Bank Plc</option>
              <option value="Wema Bank Plc">Wema Bank Plc</option>
              <option value="Zenith Bank Plc">Zenith Bank Plc</option>
            </select>
          </label>
          <label>
            <p>Account Name</p>
            <input placeholder="Account Name" value={details.name} name="name" onChange={handleChange}></input>
          </label>
          <label>
            <p>Account Number</p>
            <input placeholder="Account Number" value={details.number} name="number" onChange={handleChange} minLength={10} maxLength={10} /> 
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
