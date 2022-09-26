import React,{useState} from 'react'
import { NavBar } from '../../components';
import styled from "styled-components"
import {DashboardButton} from '../../components';
import {Link} from "react-router-dom"
import Hamburger from 'hamburger-react'

function Dashboard() {
  const [title,setTitle] = useState("Dashboard")
  const [clicked,setClicked] = useState([{"sell":false,"withdraw":false,"account":false,"history":false}])
  const [page,setPage] = useState("sellAirtime");
  const [isopen, setOpen] = useState(false)

  
  const handleSellAirtime = ()=>{
    setTitle("Dashboard");
    const newArr = clicked.map((val)=>{
      return {...val,sell:true,widthraw:false,account:false,history:false}
    })
    setPage("sellAirtime")
    setClicked(newArr)   
  };
  const handleWithdraw =()=>{
    setTitle("Dashboard")
    const newArr = clicked.map((val)=>{
      return {...val,sell:false,widthraw:true,account:false,history:false}
    })
    setPage("withdraw")
    setClicked(newArr)   

  }
  const handleAccount = () =>{
    setTitle("Managed Card")

    const newArr = clicked.map((val)=>{
      return {...val,sell:false,widthraw:false,account:true,history:false}
    })
    setPage("account")
    setClicked(newArr)   
  }
    

  const handleHistroy = () =>{
    setTitle("Managed Bank")
    const newArr = clicked.map((val)=>{
      return {...val,sell:false,widthraw:false,account:false,history:true}
    })
    setPage("history")
    setClicked(newArr)   
  }
  const renderPage = ()=>{
    if(page === "sellAirtime") return "SellAirtime"
    if(page === "withdraw") return "Withdraw"
    if(page === "account") return "Account"
    if(page === "history") return "History"
  }
  return (
    <DashboardStyle>  
      <NavBar dashboard/>
      
      <div className='dashboard-bar'>

      </div>
      <div className='container'>
        {isopen && <Hamburger  />}
        
         <h1 className='dashboard-title'>{title}</h1>

         <div className='inner-container'>
            <div className='button-container'>
                
                {(page === "sellAirtime" || page === "withdraw") &&
                  <DashboardButton />
                }
                
                <div className='dashboard-navigation'>
                    <p
                    className={`nav-link sell ${clicked[0]["sell"] && "selected"}`}   
                    onClick={handleSellAirtime}  
                    >Sell airtime </p>
                    <p className={`nav-link withdraw ${clicked[0]["widthraw"] && "selected"}`} onClick={handleWithdraw} > Withdraw balance </p>
                    <p className={`nav-link account ${clicked[0]["account"] && "selected"}`} onClick={handleAccount}> Manage bank account </p>
                    <p className={`nav-link history ${clicked[0]["history"] && "selected"}`} onClick={handleHistroy} > Transaction history </p>
                </div>
            </div>
            {renderPage()}
         </div>
      </div>
    </DashboardStyle>
  )
}

const DashboardStyle = styled.div`
  max-width: 1440px;
  width:100%;
  padding-bottom: 8.9375em;
  position: relative;
  top:0;
  bottom: 0;
  left:0;
  right:0;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;


  .dashboard-bar{
    max-width: 1440px;
    width:100%;
    height: 271px;
    background: rgba(222, 61, 109, 0.1);
  }

  .container{

    position:absolute;
    top:11em;
    max-width: 679px;
    width: 47.152%;
    border: 1px solid #D9D9D9;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.75em;
    height:1106px;
    
  }
  .inner-container{
    max-width: 559px;
    width:78.53%;
    height: 812px;

    display:flex;
    flex-direction:column;
  }
  .button-container{
    max-width: 553px;
    width:100%;
    height: 220px;
    display:flex;
    flex-direction:column;
    align-item:center;
  
  }

  .dashboard-navigation{
    display: flex;
    flex-direction: row;
    padding: 0px;
    gap: 25px;
    max-width: 553px;
    width:100%;
    margin-top:2em;
    
    .humb{
      color:red;
    }
    .nav-link{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 0.75em;
      line-height: 1.3em;
      color: #012A4A;
      text-decoration:none;
      max-width:25%;
      cursor: pointer;
    
    }
    .nav-link::hover{
      cursor:pointer;

    }
    .selected{
      border-bottom:2px solid #DE3D6D;
      
    }

    .sell{
      flex: 0 0 74px;
    }
    .withdraw{
      flex: 1 1 127px;
    }
    .account{
      flex: 1 1 150px;
    }
    .history{
      flex: 1 1 127px;
    }
  }


  
    

`
export default Dashboard
