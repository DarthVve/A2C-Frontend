const transactions = [
    {
        id: 1,
        amount: '5000',
        date: new Date().toLocaleDateString(),
        day: new Date().toDateString().slice(0,3),
        time: new Date().toLocaleTimeString(),
        bankName: 'Access',
        Status:true
    },
    {
        id: 2,
        amount: '10000',
        date: new Date().toLocaleDateString(),
        day: new Date().toDateString().slice(0,3),
        time: new Date().toLocaleTimeString(),
        bankName: 'GTB',
        Status:false
    },
    {
        id: 3,
        amount: '4000',
        date: new Date().toLocaleDateString(),
        day: new Date().toDateString().slice(0,3),
        time: new Date().toLocaleTimeString(),
        bankName: 'Fidelity',
        Status:true
    },
    {
        id: 4,
        amount: '20000',
        date: new Date().toLocaleDateString(),
        day: new Date().toDateString().slice(0,3),
        time: new Date().toLocaleTimeString(),
        bankName: 'Sterling',
        Status:false
    },
    {
        id: 5,
        amount: '500',
        date: new Date().toLocaleDateString(),
        day: new Date().toDateString().slice(0,3),
        time: new Date().toLocaleTimeString(),
        bankName: 'UBA',
        Status:false
    },
    {
        id: 6,
        amount: '3500',
        date: new Date().toLocaleDateString(),
        day: new Date().toDateString().slice(0,3),
        time: new Date().toLocaleTimeString(),
        bankName: 'keystone',
        Status:true
    },
    {
        id: 7,
        airtime_amount: '350000',
        date: new Date().toLocaleDateString(),
        day: new Date().toDateString().slice(0,3),
        time: new Date().toLocaleTimeString(),
        bankName: 'FirstBank',
        Status:true

    }
];

export default transactions;