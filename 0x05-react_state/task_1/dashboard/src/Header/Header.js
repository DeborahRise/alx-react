import React from 'react';
import {StyleSheet, css} from 'aphrodite'
import logo from '../holberton-logo.png';

const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    boaderBottom: '4px solid rgb(220, 34, 34)',
    color: 'rgb(230, 34, 34)',
    alignItems: 'center',
    marginTop: '12rem',
  },
  AppHeaderImg: {
    height: '150px',
  }
})

const Header = () => {
  return (
    <div>
        <header className={css(styles.AppHeader)}>
        <img className={css(styles.AppHeaderImg)} src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>
    </div>
  )
}

export default Header