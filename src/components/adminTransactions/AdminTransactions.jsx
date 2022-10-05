import './adminTransactions.scss';
import { useState, useEffect } from 'react';
import { Table, Button } from '../../components';

const AdminTransactions = () => {
  const [data, setData] = useState([]);
  const [columns] = useState([
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
      Header: 'Network',
      accessor: 'network'
    },
    {
      Header: 'Status',
      accessor: 'status'
    }
  ]);
  
  useEffect(() => {
    //api call to get transactions
    //sort by date- newest first
    setData([
      { id: 1, email: 'email@gmail.com', phonenumber: '07089678855', amount_sent: 2000, amount_to_receive: 1700, network: 'MTN', status: 'Cancelled' },
      { id: 1, email: 'email@gmail.com', phonenumber: '07089678855', amount_sent: 2000, amount_to_receive: 1700, network: 'Etisalat', status: 'Sent' },
      { id: 1, email: 'email@gmail.com', phonenumber: '07089678855', amount_sent: 2000, amount_to_receive: 1700, network: 'Etisalat', status: 'Sent' },
      { id: 1, email: 'email@gmail.com', phonenumber: '07089678855', amount_sent: 2000, amount_to_receive: 1700, network: 'Glo', status: 'Sent' }
    ])
  }, [])

  return (
    <div className='transactions-tab'>
      <h1 className='tab-title'>Transactions</h1>
      <div className='scroll-container'>
        <div className='transactions'>
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}

export default AdminTransactions;