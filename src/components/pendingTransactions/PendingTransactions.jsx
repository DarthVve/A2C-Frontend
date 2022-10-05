import './pendingTransactions.scss';
import { useState, useEffect } from 'react';
import { Table, AdminActions } from '../../components';

const PendingTransactions = () => {
  const [data, setData] = useState([]);
  const [columns] = useState([
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Phone Number',
      accessor: 'phonenumber'
    },
    {
      Header: 'Amount Sent',
      accessor: 'amount_sent'
    },
    {
      Header: 'Amount to Receive',
      accessor: 'amount_to_receive'
    },
    {
      Header: 'Action',
      accessor: 'action'
    }
  ]);
  
  useEffect(() => {
    //api call to get transactions
    //sort by date- oldest first
    setData([
      { id: 1, email: 'email@gmail.com', phonenumber: '07089678855', amount_sent: 2000, amount_to_receive: 1700, action: <AdminActions/> },
      { id: 1, email: 'email@gmail.com', phonenumber: '07089678855', amount_sent: 2000, amount_to_receive: 1700, action: <AdminActions/> },
      { id: 1, email: 'email@gmail.com', phonenumber: '07089678855', amount_sent: 2000, amount_to_receive: 1700, action: <AdminActions/> },
      { id: 1, email: 'email@gmail.com', phonenumber: '07089678855', amount_sent: 2000, amount_to_receive: 1700, action: <AdminActions/> },
      { id: 1, email: 'email@gmail.com', phonenumber: '07089678855', amount_sent: 2000, amount_to_receive: 1700, action: <AdminActions/> }
    ])
  }, [])

  return (
    <div className='overview-tab'>
      <h1 className='tab-title'>Admin Dashboard</h1>
      <div className='scroll-container'>
        <div className='pending-transactions'>
          <Table columns={columns} data={data} />
        </div>
      </div>
      
    </div>
  );
}

export default PendingTransactions;