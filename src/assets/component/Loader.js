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
                    colors={['#E70448', '#FBBC04', '#4285F4', '#34A853', '#2C3E50']}
                />
            </div>
        </>
    )
}

export default Loader