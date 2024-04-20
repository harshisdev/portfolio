import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
        <>
            <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
                <ThreeDots
                    visible={true}
                    height="60"
                    width="60"
                     ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass="three-dots-loading"
                    color="#1C242C"
                />
            </div>
        </>
    )
}

export default Loader
