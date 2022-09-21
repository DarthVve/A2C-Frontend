import React from 'react'
import styled from 'styled-components'
import showcaseImage  from "../../assets/showcaseImage.png"
import {NavLink} from "react-router-dom"

function Showcase() {
  return (
    <ShowcaseStyle>
        <div className='container'>
            <div className='Showcase-title'>
                    <div className='text'>
                        <h1>
                            Surplus Airtime?
                        Don't worry we
                            got you covered
                        </h1>
                        
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <NavLink to="/register" className='btnSignUp'>Get Started</NavLink>
            </div>
                
            <div className='Show'>
                
            </div>
        </div>
        
           
        
    </ShowcaseStyle>
  )
}
const ShowcaseStyle = styled.div`
    
    width:100%;
    max-width:1440px;
    background: rgba(245, 132, 76, 0.05);

    img{
        max-width:100%;
        display:block;
    }
    
    .container{
        display:flex;
        max-width:85%;
        margin:0 auto;
        justify-content:space-between;
        
    }
    .Showcase-title{
        width: 45%;
        margin-top:80px;
        margin-bottom:117px;
        display: flex;
        flex-direction: column;
        padding: 0px;
       
        .text{
            width: 524px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            gap: 32px;
            h1{
                width: 524px;
                height: 219px;
                font-style: normal;
                font-weight: 700;
                font-size: 3.75rem;
                line-height: 73px;
                background: linear-gradient(89.39deg, #DE3D6D 18.77%, #F5844C 91.68%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
            }
            p{
                width: 508px;
                height: 48px;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #03435F;
            }
        }
        .btnSignUp{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 10px;
            gap: 10px;
            width: 171px;
            height: 48px;
            background: linear-gradient(107.45deg, #DE3D6D 47.58%, #F5844C 104.23%);
            border-radius: 4px;
            text-decoration:none;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            color: #FFFFFF;
        }
    } 
    .Show{
        width: 54%;
        height: 540px;
        margin-top: 44px;
        background:url(${showcaseImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
       

    } 

`
export default Showcase

