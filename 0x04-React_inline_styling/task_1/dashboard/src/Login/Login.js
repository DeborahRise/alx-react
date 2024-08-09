import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  AppBody: {
    height: '50vh',
    borderBottom: '4px solid rgb(220, 34, 34)',
  },
});

const Login = () => {
  return (
    <div>
        <div className={css(styles.AppBody)}>
        <p>Login to access the full dashboard</p>
        <label>Email:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <button>OK</button>
      </div>
    </div>
  )
}

export default Login