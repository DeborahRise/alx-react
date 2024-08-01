import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)} </p>
      </footer>
    </div>
  )
}

export default Footer