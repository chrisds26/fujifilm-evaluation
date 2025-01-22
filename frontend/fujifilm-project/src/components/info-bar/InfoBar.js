import React from "react";
import './InfoBar.css'

import fujifilm_logo from '../../assets/images/fujifilm_corporate_logo.svg';

function InfoBar () {

    return(
        <div className="info-bar row">
            <div className="col-6 p-4">
                <img src={fujifilm_logo} alt="fujifilm_logo" className="img-logo" />
            </div>
            <div className="col-6 d-flex align-items-center justify-content-end">
                <h1 className="title-project">Proyecto de evaluación</h1>
            </div>
        </div>
    );
}

export default InfoBar;