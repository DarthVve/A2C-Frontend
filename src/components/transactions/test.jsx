import './Transaction.scss'
import React, { useState, useEffect } from 'react';
import TRANS from './transactions-sample'
import { Pagination } from '../../components'

const Transactions = () => {
    const [trans, setTrans] = useState([]);
    const [curPage, setCurPage] = useState(1);
    const [itemsPerPage] = useState(3);
    
    useEffect(() => {
        setTrans(TRANS);
    }, []);

    const idxOfLastItem = curPage * itemsPerPage;
    const idxOfFirstItem = idxOfLastItem - itemsPerPage;
    const itemsToShow = trans.slice(idxOfFirstItem, idxOfLastItem);

    const paginate = (pageNum) => setCurPage(pageNum);

    return (
        <div className='trans-main'>
            <div className='trans-header'>
                <h1>Transactions</h1>
                {/* Dashboard navigation tab goes here*/}
            </div>
            <div className='transactions'>
                {itemsToShow.map((trans) => 
                    <div className='trans' key={trans.id}>
                        <div className='trans-details'>
                            <p className='td1'>{trans.day + ', ' + trans.time}</p>
                            <p className='td2'>Withdraw fund</p>
                            <p className='td3'>{trans.date}</p>
                        </div>
                        <div className='trans-status'>
                            <div className='status'>
                                Received
                            </div>
                            <p className='amount'>&#8358;{trans.amount}</p>
                        </div>
                    </div>
                )}
                <Pagination itemsPerPage={itemsPerPage} totalItems={trans.length} paginate={paginate} />
            </div>
        </div>
    )
};

export default Transactions;