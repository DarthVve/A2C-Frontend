import './WithdrawalHistory.scss'
import React, { useState, useEffect } from 'react';
// import withdrawal from './Withdrawal-Sample'
import { Pagination } from '..'
import axios from '../../axios';

const WithdrawalHistory = () => {
    const [withdraw, setWithdraw] = useState([]);
    const [curPage, setCurPage] = useState(1);
    const [itemsPerPage] = useState(3);

    //     const token= localStorage.getItem("token")
//     const getWithdraw = async()=> {
//         try{
//             axios.get("localhost:3500/withdrawal/all", {
//                 headers: { Authorization : `Bearer ${token}`},
//                 }).then(response => console.log(response) )
//         }catch (error){
//             console.log(error)
//         }
// getWithdraw()
//     }

const getWithdrawal = async() => {
    try{
        const res = await axios.get(`/withdrawal/all`)
        console.log(res)
        let accounts = res.data.withdrawals
        setWithdraw(accounts)
console.log(accounts)
    }catch(error){
console.log(error)
    }

}

useEffect(() => {
    getWithdrawal()
    // setWithdraw(accounts)
  }, [])

//   useEffect(() => {
//         setWithdraw(withdrawal);
//     }, []);

    const idxOfLastItem = curPage * itemsPerPage;
    const idxOfFirstItem = idxOfLastItem - itemsPerPage;
    const itemsToShow = withdraw.slice(idxOfFirstItem, idxOfLastItem);

    const paginate = (pageNumber) => setCurPage(pageNumber);

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const timer = "2022-10-07T00:54:49.236Z";
let dayNumber=  weekday[new Date (withdraw.createdAt).getUTCDay()]
let dayOfWeek = weekday[dayNumber]

    return (
        <>
            <div className='withdraws'>
                {itemsToShow.map((withdraw) => 
                    <div className='withdrawal' key={withdraw.id}>
                        <div className='withdraw-details'>
                            <p className='wd1'>{weekday[new Date (withdraw.createdAt).getUTCDay()] 
                            +  "," + " " +
                            withdraw.createdAt.slice(11, 19)}</p>
                            <p className='wd2'>{withdraw.bank}</p>
                            <p className='wd3'>{withdraw.createdAt.slice(0, 10)}</p>
                        </div>
                        <div className='withdraw-status'>
                            <div className='withdrawal-status'>
                                {console.log(withdraw.status)}
                                {withdraw.status? "Received":"Pending"}
                            </div>
                            <p className='withdrawal-amount'>&#8358;{withdraw.amount}</p>
                        </div>
                    </div>
                )}
                <Pagination itemsPerPage={itemsPerPage} totalItems={withdraw.length} paginate={paginate} />
            </div>
        </>
    )
};

export default WithdrawalHistory;