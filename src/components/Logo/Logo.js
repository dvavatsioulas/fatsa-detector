import React from 'react';
import Tilt from 'react-tilt'
import face from './faceLogo.png'

const Logo = () => {
    return (
        <div className='ma4 mt0 pt6' align='center'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> 
                    <img src={face} alt="FatsaDetector" height="150" width="150"/>
                </div>
            </Tilt>

        </div>
    );
}

export default Logo;