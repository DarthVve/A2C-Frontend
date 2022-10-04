import React,{useState} from 'react';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
import account from '../../assets/account.svg';
import helpCenter from '../../assets/helpCenter.svg';
import settings from '../../assets/settings.svg';
import logoutIcon from '../../assets/logoutIcon.svg';
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";
import { useAuth } from "../../hooks/useAuth";
import { toast } from 'react-toastify';
import { UserAvatar } from '../';

function UserProfileNav({dashboard, setIsLogin}) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const { avatar, id,username } = JSON.parse(localStorage.getItem('userInfo'))
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get('/user/logout')
      if(res) {
        toast.success("Logged out successfully");
        logout();
        localStorage.removeItem('userInfo')
        navigate('/');
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const route = () => {
    navigate(`/userprofile/${id}`)
  };

  return (
    <Profile >
        <img onClick={setShowModal.bind(null, true)} style={{borderRadius:"50%", width:"40px",height:"40px"}} 
          src= {avatar}
        alt='Profil Pic'
        className='profile-avatar-img'
        />
        <span>{username}</span>
        {/* { dashboard && */}
          <>
            <FiChevronDown onClick={()=>setShowDropdown(!showDropdown)}/>
            <Dropdown showDropdown={showDropdown}>
              <Link to={`/dashboard/${id}`}><DropdownItem><img className='dropdown-img' src={account} alt="" onClick={setShowModal.bind(null, true)}/><span>Account</span></DropdownItem></Link>
              <DropdownItem><img src={settings} alt='settings' /><span onClick={route}>Settings</span></DropdownItem>
              <DropdownItem><img src={helpCenter} alt='help center' /><span>Help Center</span></DropdownItem>
              <DropdownItem><img src={logoutIcon} alt='logout'/><span onClick={handleLogout}>Logout</span></DropdownItem>
            </Dropdown>
           
          </>
      {/* } */}
       {showModal && <UserAvatar close={setShowModal.bind(null, false)}/>}
    </Profile>
  )
};

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap:10px;
  cursor: pointer;

  &.Profile-Avatar-img {
      width: 36px;
      border-radius: 50%;
  }
`

const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    right: 7%;
    background-color: #fff;
    width: 226px;
    height: 180px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    z-index: 100;
    display: ${({ showDropdown }) => (showDropdown ? 'block' : 'none')};
    transition: all 0.3s ease-in-out;  
    
    &.active {
        display: block;
    }
`

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #21334F;
  font-weight: lighter;
  margin: 15px 20px;

  & .dropdown-img {
    width: 24px;
  }
`
export default UserProfileNav;