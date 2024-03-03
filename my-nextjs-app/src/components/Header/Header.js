import React from 'react';
import styles from './Header.module.css';
import IconButton from "@mui/material/IconButton";
import Icon from '@mui/material/Icon';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';

const Header = () => {
  return (
    <header className={styles.header}>
      <svg
        width="20"
        height="25"
        viewBox="0 0 20 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.5284 0.0629795C11.8104 0.151649 12.0567 0.327954 12.2315 0.566252C12.4064 0.80455 12.5006 1.09241 12.5006 1.38798V8.33243H18.0562C18.3102 8.33232 18.5595 8.40189 18.7767 8.53358C18.994 8.66526 19.171 8.85402 19.2884 9.0793C19.4058 9.30458 19.4592 9.55776 19.4428 9.81128C19.4263 10.0648 19.3407 10.3089 19.1951 10.5172L9.47285 24.4061C9.30364 24.6485 9.0615 24.8306 8.78165 24.9259C8.50181 25.0212 8.19885 25.0247 7.91687 24.9359C7.63489 24.8471 7.38859 24.6707 7.21381 24.4323C7.03903 24.1938 6.94488 23.9059 6.94507 23.6102V16.6658H1.38951C1.13545 16.6659 0.886237 16.5963 0.668976 16.4646C0.451716 16.3329 0.274736 16.1442 0.157298 15.9189C0.0398601 15.6936 -0.0135375 15.4405 0.00291644 15.1869C0.0193704 14.9334 0.105046 14.6893 0.250618 14.481L9.97285 0.592147C10.1423 0.350184 10.3845 0.168552 10.6642 0.0736408C10.944 -0.0212709 11.2467 -0.0245189 11.5284 0.0643684V0.0629795Z"
          fill="#4F46E5"
        />
      </svg>
      <div className={styles.shoppingBag}>
        <ShoppingBagTwoToneIcon />
        <span>x4</span>
      </div>
    </header >
  );
};

export default Header;