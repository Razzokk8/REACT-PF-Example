import React from 'react'


function Foot() {
    
    const today = new Date();
    
    return (
        <div className='container d-flex justify-content-center'>
            <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Riccardo Limiti &copy; <span>{today.getFullYear()}</span>
        </span>
        </div>
            </nav>
        </div>
    )
}

export default Foot