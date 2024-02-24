import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
    return (
        <>
            <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
                <ColorRing
                    visible={true}
                    height="60"
                    width="60"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </div>
        </>
    )
}

export default Loader