import './adminDashboard.scss';
import { AdminTransactions, PendingTransactions, NavBar } from '../../components';
import { useState } from 'react';

const AdminDashboard = () => {
  const [tabs] = useState([
    {
      name: 'Overview',
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 10H0.5C0.2 10 0 10.2 0 10.5V17.5C0 17.8 0.2 18 0.5 18H7.5C7.8 18 8 17.8 8 17.5V10.5C8 10.2 7.8 10 7.5 10ZM7 17H1V11H7V17ZM7.5 0H0.5C0.2 0 0 0.2 0 0.5V7.5C0 7.8 0.2 8 0.5 8H7.5C7.8 8 8 7.8 8 7.5V0.5C8 0.2 7.8 0 7.5 0ZM7 7H1V1H7V7ZM17.5 0H10.5C10.2 0 10 0.2 10 0.5V7.5C10 7.8 10.2 8 10.5 8H17.5C17.8 8 18 7.8 18 7.5V0.5C18 0.2 17.8 0 17.5 0ZM17 7H11V1H17V7ZM17.5 13.5H14.5V10.5C14.5 10.2 14.3 10 14 10C13.7 10 13.5 10.2 13.5 10.5V13.5H10.5C10.2 13.5 10 13.7 10 14C10 14.3 10.2 14.5 10.5 14.5H13.5V17.5C13.5 17.8 13.7 18 14 18C14.3 18 14.5 17.8 14.5 17.5V14.5H17.5C17.8 14.5 18 14.3 18 14C18 13.7 17.8 13.5 17.5 13.5Z" fill="currentColor"/>
            </svg>,
      component: <PendingTransactions />,
    },
    {
      name: 'Transactions',
      icon: <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.9425 6.00027H1.25V4.50027H18.9425L16.4675 2.03277L17.5325 0.967773L21.8075 5.25027L17.5325 9.53277L16.4675 8.46777L18.9425 6.00027ZM5.53251 9.53277L4.4675 8.46777L0.192505 12.7503L4.4675 17.0328L5.53251 15.9678L3.0575 13.5003H20.75V12.0003H3.0575L5.53251 9.53277Z" fill="currentColor"/>
            </svg>,
      component: <AdminTransactions />,
    }
  ])
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className='adminPage'>
      <NavBar dashboard/>
      <section className='adminDashboard'>
        <nav className='admin-sidebar'>
          <ul className='admin-tabs'>
            {tabs.map(tab => tab.name === activeTab.name ?
              (
                <li className='tab-link active' key={tab.name} onClick={() => setActiveTab(tab)}>
                  <span className='tab-icon active'>{tab.icon}</span>
                  <span className='tab-text active'>{tab.name}</span>
                </li>
              ) : (
                <li className='tab-link' key={tab.name} onClick={() => setActiveTab(tab)}>
                  <span className='tab-icon'>{tab.icon}</span>
                  <span className='tab-text'>{tab.name}</span>
                </li>
              )
            )}
          </ul> 
        </nav>
        <main className="admin-main">
          {activeTab.component}
        </main>
      </section>
    </div>
  );
}

export default AdminDashboard;