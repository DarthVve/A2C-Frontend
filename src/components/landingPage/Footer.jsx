import React from 'react'
import styled from 'styled-components'
import LogoFooter from '../../assets/LogoFooter.png'
import Twitter from '../../assets/Twitter.png'
import Instagram from '../../assets/Instagram.png'
import Youtube from '../../assets/Youtube.png'

function Footer() {
  return (
    <FooterStyle>
        <div className='container'>
            <div className='logo'>
                <img src={LogoFooter} alt="Logo"/>
            </div>
            <div className='menu'>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Airtime2Cash</a>
                <a href='#'>Contact</a>
            </div>
            <div className='bottom'>
                <div className='divider'></div>
                <div className='down'>
                    <p> &copy; 2022 Airtime2Cash, All right reserve</p>
                    <div className='social'>
                        <img src={Instagram} alt="Instagram" />
                        <img src={Twitter} alt="Twitter" />
                        <img src={Youtube} alt="Youtube" />
                    </div>                    
                </div>
            </div>
        </div>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`
    height: 284px;
    width:100vw;
    margin-top:80px;
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 180px 32px 190px;
        gap: 34px;
        height: 284px;
        max-width: 100%;
        margin: 0 auto;
        background: #21334F;
        
        .logo{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap: 16px;
            width: 269px;
            height: 70px;
        }
        .menu{
            width: 322px;
            height: 26px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0px;
            gap: 24px;
            
            a{
                text-decoration:none;
                width: 45px;
                height: 26px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 26px;
                color: #F2F2F2;
            }
            
        }
    }
    .bottom{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 23px;
        height: 48px;
        
        
        .divider{
            width: 1100px;
            height: 1px;
            background: #FFFFFF;
            opacity: 0.2;
        }
        .down{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0px;
            gap:735px;
            width: 1100px;
            height: 24px;
            p{
                height: 24px;
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 24px;
                color: #FFFFFF;
                  
            }
            .social{
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 0px;
                gap: 16px;
                width: 104px;
                height: 24px;
              
            
                img{
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }

`
export default Footer