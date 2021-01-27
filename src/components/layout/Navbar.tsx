import React from 'react';
import { Menu } from 'antd';
import NavDrawer from './NavDrawer';

const Navbar = () => {
  return (
    <Menu theme='light' mode='horizontal'>
      <Menu.Item key='2' style={{ float: 'right' }}>
        <NavDrawer></NavDrawer>
      </Menu.Item>
      <Menu.Item key='1'>
        <h3>Chinese Checker</h3>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
