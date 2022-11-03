import React from 'react';

import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';

function WebCards() {
    
    return (

        <div id='webCards' className='d-flex justify-content-center align-items-center'>
         <div className="wrapper d-flex justify-content-center">
        <div className="col justify-content-center">



          <div className="col-4 w-100">
            <div className="box card-gradient mb-3">
              <div className="card-inner">
                <div className="box-hover">
                  <div className="box-header">
                    <label className="box-label">
                      <span className="label d-flex align-items-center">
                      <DeveloperModeOutlinedIcon /><span className='text-muted ms-1'/>Web development</span>
                    </label>
                    <div className="triangle"><span className="shadow" /></div>
                  </div>
                  <div className="box-body">
                    <div className="title">Building web sites, desktop and mobile applications, pure coding.</div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="col-4 w-100">
            <div className="box card-gradient mb-3">
              <div className="card-inner">
                <div className="box-hover">
                  <div className="box-header">
                    <label className="box-label">
                      <span className="label d-flex align-items-center">
                      <DesignServicesOutlinedIcon /><span className='text-muted ms-1'/>Web design</span>
                    </label>
                    <div className="triangle"><span className="shadow" /></div>
                  </div>
                  <div className="box-body">
                    <div className="title">Help with Web Design, Content, Pictures and Typography.</div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="col-4 w-100">
            <div className="box card-gradient mb-3">
              <div className="card-inner">
                <div className="box-hover">
                  <div className="box-header">
                    <label className="box-label">
                      <span className="label d-flex align-items-center">
                      <WebhookOutlinedIcon /><span className='text-muted ms-1'/>Project Development</span>
                    </label>
                    <div className="triangle"><span className="shadow" /></div>
                  </div>
                  <div className="box-body">
                    <div className="title">Marketing Consultations and help in project development.</div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="col-4 w-100">
            <div className="box card-gradient mb-3">
              <div className="card-inner">
                <div className="box-hover">
                  <div className="box-header">
                    <label className="box-label">
                      <span className="label d-flex align-items-center">
                      <DeveloperBoardOutlinedIcon /><span className='text-muted ms-1'/>Consultations</span>
                    </label>
                    <div className="triangle"><span className="shadow" /></div>
                  </div>
                  <div className="box-body">
                    <div className="title">Consultations in development, web design and engineering fields.</div>
                  </div>
                </div>
              </div>
            </div>
        </div>



        <div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default WebCards