import React from 'react'
import styled from 'styled-components'
import LeftArrow from "../../assets/LeftArrow.png"
import RightArrow from "../../assets/RightArrow.png"

function Reviews() {
  return (
        <ReviewStyle>
            <div className='container'>
                <div className='heading'>
                    <h1>Hear what our customers are saying</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laudantium necessitatibus ea mollitia sed rerum?</p>
                </div>
                <div className='bar'>
                    <img src={LeftArrow} alt="left arrow" className='leftimg'/>
                    <img src={RightArrow} alt="right arrow" className='rightimg'/>
                </div>
                <div className='reviews'>
                    <div className='box'>
                        <h1>Adekola Johnson</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Cumque aliquam magnam explicabo consectetur adipisci, 
                            quaerat tempore nisi incidunt dolorum officiis!
                        </p>
                    </div>
                    <div className='box'>
                        <h1>Adekola Johnson</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Cumque aliquam magnam explicabo consectetur adipisci, 
                            quaerat tempore nisi incidunt dolorum officiis!
                        </p>
                    </div>
                    <div className='box'>
                        <h1>Adekola Johnson</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Cumque aliquam magnam explicabo consectetur adipisci, 
                            quaerat tempore nisi incidunt dolorum officiis!
                        </p>
                    </div>
                </div>
            </div>
        </ReviewStyle>
  )
}

const ReviewStyle = styled.div`
    
    width:100%;
    max-width:1440px;
    margin-top:80px;
    position:relative;
    .container{
        margin:0 auto;
        max-width:85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 60px;     
    }
    .heading{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 20px;
        width: 705px;
        height: 120px;
        h1{
            width: 705px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            line-height: 48px;
            color: #03435F;
        }
        p{
            width: 26em;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 24px;
            text-align: center;
            color: #03435F;
        }
    }
    .reviews{ 
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 20px;
        height: 218px;
        width:100%;
       
    
        .box{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 32px 24px;
            gap: 24px;
            width: 374px;
            height: 218px;
            background: rgba(0, 0, 0, 0.04);

            h1{
                width: 138px;
                height: 26px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 26px;
                color: #012A4A;
            }
            p{
                width: 326px;
                height: 104px;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 26px;
                color: #012A4A;
            }

        }
    }
    .bar{
        position:absolute;
        width: 95%;
        height: 50px;
        top: 250px;
       .leftimg{
            position: absolute;
            width: 50px;
            height: 50px;
            left: 0px;
            top: 0px;
       }
        .rightimg{
            position: absolute;
            width: 50px;
            height: 50px;
            top: 0px;
            right:0px;
        }
    }
    @media (max-width:1240px){
       .reviews{
            display:grid;
            grid-template-columns: repeat(2, auto);
            margin-bottom:20em;
       }
    }
      
`


export default Reviews