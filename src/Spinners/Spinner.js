import React from 'react'
import SpinnerImg from "../Assets/img/loader.gif";

const Spinner = () => {
    return (
        <div>
            <img src={SpinnerImg} alt="Loader.." className='d-block m-auto' />
        </div>
    )
}

export default Spinner
