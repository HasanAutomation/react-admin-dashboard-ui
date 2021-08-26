import React from 'react';
import { Visibility } from '@material-ui/icons';
import './WidgetSmall.css';

export default function WidgetSmall() {
  return (
    <div className='small'>
      <span className='small-title'>New Joined Members</span>
      <ul className='small-list'>
        <li className='small-list-item'>
          <img
            className='user-logo'
            src='https://picsum.photos/200'
            alt='User'
          />
          <div className='small-list-item-user'>
            <span className='username'>Hasan Ali</span>
            <span className='job-role'>Software Engineer</span>
          </div>
          <button className='btn-visible'>
            <Visibility className='visiblity-icon' />
            Display
          </button>
        </li>
        <li className='small-list-item'>
          <img
            className='user-logo'
            src='https://picsum.photos/200'
            alt='User'
          />
          <div className='small-list-item-user'>
            <span className='username'>Humayun Kabir</span>
            <span className='job-role'>Software Engineer</span>
          </div>
          <button className='btn-visible'>
            <Visibility className='visiblity-icon' />
            Display
          </button>
        </li>
        <li className='small-list-item'>
          <img
            className='user-logo'
            src='https://picsum.photos/200'
            alt='User'
          />
          <div className='small-list-item-user'>
            <span className='username'>Rohan Pradev</span>
            <span className='job-role'>Software Engineer</span>
          </div>
          <button className='btn-visible'>
            <Visibility className='visiblity-icon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
