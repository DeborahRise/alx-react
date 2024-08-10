import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  AppBody: {
    margin: '10px',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  labelInputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  input: {
    marginLeft: '10px',
    '@media (max-width: 900px)': {
      marginLeft: '0',
      marginBottom: '10px',
      width: '100%',
    },
  },
  button: {
    display: 'block',
    marginTop: '20px',
    '@media (max-width: 900px)': {
      width: '100%',
    },
  },
});

const Login = () => {
  return (
    <div>
        <div className={css(styles.AppBody)}>
          <div className={css(styles.labelInputContainer)}>
            <p>Login to access the full dashboard</p>
            <label>Email:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="password" />
            <button>OK</button>
          </div>
       
      </div>
    </div>
  )
}

export default Login