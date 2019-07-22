import React from 'react';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'FatsaDetector detects faces in your images.'}
                <br></br>
                {'Just paste the link below and click Detect!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
                    <button
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onSubmit}> Detect </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;