import React from 'react'

function GetInTouch() {
    return (
        <div className='container mt-5 mb-5' id='contact'>

            <div className='d-flex justify-content-center align-items-center flex-column'>
                <h2 className='text-center'>Get in touch</h2>
                <div className='text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-envelope " viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                </div>
                <button type="button" className="btn btn-outline-primary mt-3" style={{maxWidth: "130px"}}>Send an Email</button>

            </div>
            
        </div>
    )
}

export default GetInTouch
