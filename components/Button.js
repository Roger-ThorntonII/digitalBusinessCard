import React from 'react'
export default function Button(){
    return(
        <div className= 'btn'>
             <a href="mailto:roger@our-tech-solutions.com" className='icon-btn email'> <i className="fa-solid fa-envelope"></i> Email</a>
             
            <button className='icon-btn linkedin'> <i className="fa-brands fa-linkedin"></i> Linkedin</button>
    </div>)
}