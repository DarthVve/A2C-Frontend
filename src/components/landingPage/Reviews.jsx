import React from 'react'
import styled from 'styled-components'
import LeftArrow from "../../assets/LeftArrow.png"
import RightArrow from "../../assets/RightArrow.png"

function Reviews() {
  return (
        <ReviewStyle>
            <div className='testimonials-container'>
                <div className='testimonials-heading'>
                    <h1 className='testimonials-title'>Hear what our customers are saying</h1>
                    <p className='testimonials-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laudantium necessitatibus ea mollitia sed rerum?</p>
                </div>
                <div className='reviews-container'>
                    <div className='testimonials-bar'>
                        <img src={LeftArrow} alt="left arrow" className='leftimg'/>
                        <img src={RightArrow} alt="right arrow" className='rightimg'/>
                    </div>
                    <div className='reviews'>
                        <div className='review-box'>
                            <h1 className='review-title'>Adekola Johnson</h1>
                            <p className='review-text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Cumque aliquam magnam explicabo consectetur adipisci, 
                                quaerat tempore nisi incidunt dolorum officiis!
                            </p>
                        </div>
                        <div className='review-box'>
                        <h1 className='review-title'>Adekola Johnson</h1>
                            <p className='review-text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Cumque aliquam magnam explicabo consectetur adipisci, 
                                quaerat tempore nisi incidunt dolorum officiis!
                            </p>
                        </div>
                        <div className='review-box'>
                        <h1 className='review-title'>Adekola Johnson</h1>
                            <p className='review-text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Cumque aliquam magnam explicabo consectetur adipisci, 
                                quaerat tempore nisi incidunt dolorum officiis!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ReviewStyle>
  )
}

const ReviewStyle = styled.div`
    
    width:1440px;
    max-width:100%;
    margin-top:80px;
    position:relative;

    .testimonials-container{
        margin:0 auto;
        max-width:85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 60px;     
    }
    .testimonials-heading{
        max-width: 90%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        
        .testimonials-title{
            width: 705px;
            max-width:100%;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: clamp(1.7rem, 3vw, 40px);
            line-height: 48px;
            color: #03435F;
        }
        .testimonials-description{
            width: 28em;
            max-width: 90%;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 24px;
            text-align: center;
            color: #03435F;
        }
    }
    .reviews-container {
        position: relative;
        overflow-x: scroll;
        overflow-y: hidden;
        margin-bottom: 90px;
        max-width: 100%;
        
        .reviews{ 
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 32px 24px;
            width: 100vw;
            flex-wrap: nowrap;
            
            width: 100%;
        display: flex;
        gap: 0;
        align-items: stretch;
        overflow-x: scroll;
        overflow-y: clip;
        -ms-overflow-style: none;
        scrollbar-width: none;
        scroll-behavior: smooth;
        scroll-snap-type: x proximity;

        &::-webkit-scrollbar {
            display: none;
        }

            .review-box{
                margin-right: 20px;
                box-sizing: content-box;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 32px 24px;
                gap: 24px;
                width: 374px;
                max-width: 90vw;
                height: 218px;
                background: rgba(0, 0, 0, 0.04);

                .review-title{
                    max-width: 90%;
                    height: 26px;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 26px;
                    color: #012A4A;
                }
                .review-text{
                    width: 326px;
                    max-width: 90%;
                    height: 104px;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 26px;
                    color: #012A4A;
                }

            }
        }
        .testimonials-bar{
            position:absolute;
            width: 95%;
            height: 50px;
            top: 50%;
            left: 0;
            right: 0;
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
    }
    // @media (max-width:1240px){
    //    .reviews{
    //         display:grid;
    //         grid-template-columns: repeat(2, auto);
    //         margin-bottom:20em;
    //    }
    // }
      
`


export default Reviews