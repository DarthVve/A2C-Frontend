import React, { useState } from 'react'
import vector from "../../assets/vector.png"
import {NavLink,Router,Route,Link} from "react-router-dom"
import styled from "styled-components"
 import UserProfileNav from './UserProfileNav'
 
 function Navbar({dashboard, Landing}) {
    const [isLogin, setIsLogin] = useState(true)
    return (
      <NavbarStyle>
          <div className='Navbar-container'> 
              <div className='Navbar-brand'>
                  <img src={vector} alt='logo'/>
                  <NavLink to="/landing" className='subject'>Airtime<span>2Cash</span></NavLink> 
              </div>
  
              <div className='Navbar-menu' >
                {
                Landing  &&
                <>
                  
                  <NavLink to="/" className='selected'>Home</NavLink>
                  <NavLink to="/about" >About Us</NavLink>
                  <NavLink to="/products" >Products</NavLink>
                  <NavLink to="/contact" className='last' >Contact Us</NavLink>
                  {isLogin ? <UserProfileNav dashboard={dashboard} loginStatus={setIsLogin} /> : 
                  <NavLink to="/Login" className='btnLogin'>Login</NavLink>
                  }
                </>
                 
                 
  
                }
                 
                 
              </div> 
              
          </div>
      </NavbarStyle>
    )
  }
  
  const NavbarStyle = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 96px;
    background: #FFFFFF;
    
    position:relative;
    .Navbar-container{
      display: flex;
      justify-content:space-between;
      align-items:center;
      max-width: 85%;
      margin: 12px auto;
     
    }
    .Navbar-brand{
      display: flex;
      align-items:center;
      justify-content:space-between;
      .subject{
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        color: #DE3D6D;
        line-height: 39px;
        margin-left:16.39px;
        text-decoration:none;
        span{
          color:#F5844C;
        }
      }
    }
    .Navbar-menu{
      
      display:flex;
      justify-content:space-between;
      align-items:center;
      
        
      a{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #012A4A;
        text-decoration:none;
        margin-left:2em;
      }
      .last{
        margin-right:1em;
      }
     .selected{
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #DE3D6D;
      }
      .btnLogin{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px;
        gap: 10px;    
        background: linear-gradient(101.31deg, #DE3D6D 42.62%, #F5844C 104.19%);
        border-radius: 4px;
        border:none;
        width:100px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        margin-left:2em;
      }
    }
  `
  
  export default Navbar
  