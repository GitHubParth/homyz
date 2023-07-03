import React from 'react'
import './GetStarted.css'
const GetStarted = () => {
  return (
    <section className="g-wrapper"id='GetStarted'>
        <div className="padding innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText' style={{ display: 'flex', alignItems: 'center' }}>Get Started with <img src='./logo4.png' alt='' width={40} style={{ marginLeft: '10px', marginRight: '2px'}} /> <span style={{ color: '#F98E4D' }}>Homyz</span></span>
                <span className='secondaryText' style={{ color: 'white' }}>
                    Subscribe and find super attractive price quptes fromus.
                    Find your residence soon.
                </span>
                <button className="button">
                    <a href='mailto:pateldarshil63533@gmail.com'>Subscribe</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted