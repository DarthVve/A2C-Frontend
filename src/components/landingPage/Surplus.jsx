import React from 'react'
import styled from 'styled-components'
import LoginImage from '../../assets/Login.png'
import Dashboard from '../../assets/Dashboard.png'
import Spinning from '../../assets/Spinning.png'

function Surplus() {
    return (
      <SurplusStyle>
          <div className='container'>
              <div className='bar'>
                  <div className='rod'></div>
                  <div className='rod-text'>
                      <h3>Change Surplus Airtime to Real Cash</h3>
                      <p>In three simple steps change airtime to cash</p>
                  </div>
              </div>
              <div className='action'>
                  <div className='sup-login box'>
                      <img src={LoginImage} alt="Login"/>
                      <div className="login-text box-inner">
                          <h1>Login Or Register</h1>
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, quae!</p>
                      </div>
                  </div>
                  <div className='deposit box'>
                      <img src={Dashboard} alt="Dashboard image"/>
                      <div className="deposit-text box-inner">
                          <h1>Deposit From Dashboard</h1>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, iusto.</p>
                      </div>
                  </div>
                  <div className='convert box'>
                      <img src={Spinning} alt="Spinning" />
                      <div className="convert-text box-inner">
                          <h1>Convert</h1>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, inventore?</p>
                      </div>
                  </div>
              </div>
          </div>
      </SurplusStyle>
    )
  }
  
  const SurplusStyle = styled.div`
      width:100%;
      max-width:1440px;
      margin-top:80px;
      .container{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          justify-content:space-between;
          width:85%;
          margin:0 auto; 
          height: 463px;
      }
      .bar{
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          padding: 0px;
          gap: 24px;
          width: 540px;
          height: 152px;
  
          .rod{
              width: 14px;
              height: 142px;
              background: #DE3D6D;
              border-radius: 0px 10px 10px 0px;
             
          }
          .rod-text{
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              padding: 0px; 
              width: 472px;
              height: 152px;
              margin-left:24px;
  
              h3{
                  width: 472px;
                  height: 112px;
                  font-style: normal;
                  font-weight: 700;
                  font-size: 40px;
                  line-height: 56px;
                  color: #03435F;
              }
              p{
                  width: 365px;
                  height: 24px;
                  font-style: normal;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 24px;
                  color: #03435F;
                  margin-top:16px;
              }
  
          }
  
      }
      .action{
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding: 0px;
          justify-content:space-between;
          max-width: 1140px;
          width:100%;
          
          
          .box{
              width: 344px;
              height: 251px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              padding: 1.5em;
              justify-content:space-between;
          }
          .sup-login{
              background: rgba(226, 0, 16, 0.05);
              img{
                  width: 64px;
                  height: 64px;
              }
          }
          .deposit{
              background: rgba(245, 132, 76, 0.05);
              img{
                  width:64px;
                  height:64px
              }
          }
          .convert{
              background: rgba(85, 166, 48, 0.05);
              img{
                  width: 64px;
                  height: 54.59px;
              }
          }
          .box-inner{
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              padding: 0px;
              gap: 24px;
              width: 296px;
              height:115px;
              h1{
                  font-style: normal;
                  font-weight: 700;
                  font-size: 16px;
                  line-height: 19px;
                  color: #03435F;
                  width: 133px;
                  height: 19px;
              }
              p{
                  font-style: normal;
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 24px;
                  color: #03435F;
                  width: 296px;
                  height: 72px;
                  margin-top:24px;
              }
          }
          .convert-text{
              margin-top:13px;
          }
         
      }
      @media (max-width:1240px){
          .action{
              display:grid;
              display: grid;
              grid-template-columns: repeat(2, auto);
              margin-top:3em;
              
              .convert{
                  margin-top:2em;
              }
          }
          margin-bottom:20rem; 
      }
  
  `
  export default Surplus