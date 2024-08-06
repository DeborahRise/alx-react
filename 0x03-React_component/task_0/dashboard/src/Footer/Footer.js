import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils';

const Footer = () => {
  return (
    <div>
        <footer className='App-footer'>
            <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
        </footer>
    </div>
  )
}

export default Footer