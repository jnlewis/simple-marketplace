import React from 'react';
import { Navbar } from 'react-bootstrap';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <Navbar fixed="top" className={styles.nav}>
      <Navbar.Brand className={styles.brand} href="/">
        NFT Marketplace
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {/* 
          TODO: When user clicks Connect Wallet, we should show a hardcoded user "Luke Skywalker" on the left side of connect wallet.
          and Connect Wallet should be replaced with "Logout". Also, all the listing card should show a "Buy" button
        */}
        <Navbar.Text>
          <a className={styles.linkItemBold}>Connect Wallet</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
