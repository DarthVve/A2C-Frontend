import styled from 'styled-components'

const WithdrawStyle = styled.div`
.warning {
    color: red;
    text-transform: lowercase;
}

.withdraw_h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    width: 66px;
    height: 17px;

}

.select_account_label {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #012A4A;
}

.select {
    width: 100%;
    margin-bottom: 20px;
    
    outline: none;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #C4C4C4;
    border: none;
    padding: 10px 407px 10px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 400px;
    height: 48px;
    background: rgba(0, 0, 0, 0.04);
}

.withdraw_balance_input {
    padding: 15px;
    margin: 20px auto;
    font-size: 16px;
    outline: none;
    background: rgba(0, 0, 0, 0.04);
    border: 1px solid #D9D9D9;
    width: 94.5%;
}

.withdrawBtn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    margin-top: 10px;
    width: 198px;
    height: 48px;
    background: linear-gradient(92.1deg, #DE3D6D 55.67%, #F5844C 101.51%);
    border: none;
}


@media screen and (max-width: 540px) {

    .withdraw_balance_input {
        box-sizing: border-box;
        padding: 15px;
        margin: 5px auto;
        font-size: 16px;
        outline: none;
        background: rgba(0, 0, 0, 0.04);
        border: 1px solid #D9D9D9;
        width: 100%;
    }

    .select_account_label {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #012A4A;
        /* margin: 5px; */
    }

    .select {
        width: 100%;
        max-width: 599px;
        margin-bottom: 20px;
        outline: none;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #C4C4C4;
        border: none;
        padding: 10px 130px 10px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 400px;
        height: 48px;
        background: rgba(0, 0, 0, 0.04);
    }

    .withdrawBtn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 15px;
        margin: 5px auto;
        width: 100%;
        height: 48px;
        background: linear-gradient(92.1deg, #DE3D6D 55.67%, #F5844C 101.51%);
        border: none;
        color: #fff;
    }

}

`

export default WithdrawStyle