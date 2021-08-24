import React from 'react';
import { LineStyle, Timeline, TrendingUp } from '@material-ui/icons';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-wrapper'>
        <div className='sidebar-menu'>
          <h3 className='sidebar-title'>Dashboard</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
              <LineStyle className='sidebar-icon' />
              Home
            </li>
            <li className='sidebar-list-item'>
              <Timeline className='sidebar-icon' />
              Analytics
            </li>
            <li className='sidebar-list-item'>
              <TrendingUp className='sidebar-icon' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebar-menu'>
          <h3 className='sidebar-title'>Quick Menu</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
              <LineStyle className='sidebar-icon' />
              Home
            </li>
            <li className='sidebar-list-item'>
              <Timeline className='sidebar-icon' />
              Analytics
            </li>
            <li className='sidebar-list-item'>
              <TrendingUp className='sidebar-icon' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebar-menu'>
          <h3 className='sidebar-title'>Notifications</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
              <LineStyle className='sidebar-icon' />
              Home
            </li>
            <li className='sidebar-list-item'>
              <Timeline className='sidebar-icon' />
              Analytics
            </li>
            <li className='sidebar-list-item'>
              <TrendingUp className='sidebar-icon' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebar-menu'>
          <h3 className='sidebar-title'>Staff</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
              <LineStyle className='sidebar-icon' />
              Home
            </li>
            <li className='sidebar-list-item'>
              <Timeline className='sidebar-icon' />
              Analytics
            </li>
            <li className='sidebar-list-item'>
              <TrendingUp className='sidebar-icon' />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
