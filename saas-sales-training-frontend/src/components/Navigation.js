import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { logout, getCurrentUser } from '../services/auth';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;
  color: #fff;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 1.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background-color: ${props => props.primary ? '#fff' : 'transparent'};
  color: ${props => props.primary ? '#000' : '#fff'};
  border: ${props => props.primary ? 'none' : '1px solid #fff'};
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  cursor: pointer;
  border-radius: 4px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 10px 20px;
  color: #000;
  text-decoration: none;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate('/');
  };

  return (
    <NavBar>
      <Logo to="/">Sale Sidekick</Logo>
      <NavLinks>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/support">Support</NavLink>
        <NavLink to="/purchase">Purchase</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        {user ? (
          <div style={{ position: 'relative' }}>
            <Button onClick={() => setDropdownOpen(!dropdownOpen)}>Account</Button>
            <DropdownMenu isOpen={dropdownOpen}>
              <DropdownItem to="/profile">Profile</DropdownItem>
              <DropdownItem to="/settings">Settings</DropdownItem>
              <DropdownItem to="/subscription">Subscription</DropdownItem>
              <DropdownItem as="button" onClick={handleLogout}>Logout</DropdownItem>
            </DropdownMenu>
          </div>
        ) : (
          <>
            <Button onClick={() => navigate('/login')}>Log in</Button>
            <Button primary onClick={() => navigate('/signup')}>Sign up</Button>
          </>
        )}
      </NavLinks>
    </NavBar>
  );
};

export default Navigation;