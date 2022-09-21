import React from 'react'
import styled from 'styled-components'
import iphone from '../../assets/iphone.png'
import Frame from '../../assets/Frame.png'

function Rectangle() {
  return (
    <RectangleStyle>
        <div className='container'>
            <div className='text'>
                <h1>The best Platform for your convenient airtime exchange</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium assumenda totam consequatur vitae perferendis quidem!</p>
                <button>Get Started</button>
            </div>
            <div className='iphone'>
                <div className='frame'>
                    <img src={Frame} alt="Frame" />
                </div>   
                       
            </div>
        </div>
    </RectangleStyle>
  )
}

const RectangleStyle = styled.div`
   
    width:100%;
    max-width:1440px;
    margin-top:80px;
    img{
        max-width:100%;
        display:block;
    }
    .container{
        max-width:85%;
        border-radius: 32px;
        margin:0 auto;
        display:flex;
        
        .text{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px;
            justify-content:space-between;
            width: 525px;
            height: 336px;
            margin-left:130px;
            margin-top:90px;
            h1{
                width: 525px;
                height: 168px;
                font-style: normal;
                font-weight: 700;
                font-size: 40px;
                line-height: 56px;
                color: #03435F;
            }
            p{
                width: 388px;
                height: 72px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 24px;
            }
            button{
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
                border:none;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                color: #FFFFFF;
            }
        }
        .iphone{
            width: 522px;
            height: 522px;
            position:relative ;
            background: url(${iphone});
            background-size:cover;
            background-repeat:no-repeat;
            
            .frame{
                position: absolute;
                width: 135px;
                height: 56px;
                left: 152px;
                top: 143.09px;
                right:244.58px;
                filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.08));
                transform: rotate(-0.87deg);
                
            }
        }
    }
   
    @media (max-width:1245px){  
            border:1px solid red;
            .text{
                
            }
            .container{
                .text{
                    margin-left:0px;
                    h1{
                        width: 500px;
                        font-style: normal;
                       
                        font-size: 30px;
                        
                    }

                }
            }
    }
    


`
export default Rectangle