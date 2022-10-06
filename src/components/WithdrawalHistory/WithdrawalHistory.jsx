import './WithdrawalHistory.scss'
import React, { useState, useEffect } from 'react';
import withdrawal from './Withdrawal-Sample'
import { Pagination } from '..'
import axios from '../../axios';

const WithdrawalHistory = () => {
    const [withdraw, setWithdraw] = useState([]);
    const [curPage, setCurPage] = useState(1);
    const [itemsPerPage] = useState(3);

    const token= localStorage.getItem("token")
    const getWithdraw = async()=> {
       
        try{
           axios.get("/withdrawal/all", {
                headers: { Authorization : `Bearer ${token}`},
                }).then(response => console.log(response) )
        }catch (error){
            console.log(error)
        }
getWithdraw()
    }

  useEffect(() => {
        setWithdraw(withdrawal);
    }, []);
    

    const idxOfLastItem = curPage * itemsPerPage;
    const idxOfFirstItem = idxOfLastItem - itemsPerPage;
    const itemsToShow = withdraw.slice(idxOfFirstItem, idxOfLastItem);

    const paginate = (pageNumber) => setCurPage(pageNumber);

    return (
        <>
            <div className='withdraws'>
                {itemsToShow.map((withdraw) => 
                    <div className='withdrawal' key={withdraw.id}>
                        <div className='withdraw-details'>
                            <p className='wd1'>{withdraw.day + ', ' + withdraw.time}</p>
                            <p className='wd2'>{withdraw.bankName}</p>
                            <p className='wd3'>{withdraw.date}</p>
                        </div>
                        <div className='withdraw-status'>
                            <div className='withdrawal-status'>
                                {console.log(withdraw.Status)}
                                {withdraw.Status? "Received":"Pending"}
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