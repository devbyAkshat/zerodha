import React from 'react';
function Hero() {
    return ( 
    <div className='container border-bottom mb-5'>
        <div className='row'>
            <div className='col-12 text-center mt-5 p-5 mb-5'>
                <h1 className='fs-2 '>Zerodha Products</h1>
                <h3 className='fs-4 p-3 text-muted '>Sleek , modern, and intutive platform</h3>
                <p className=" text-muted ">Check out our <a href='' style={{textDecoration:"none"}}>investment offerings <i class="fas fa-long-arrow-alt-right"></i></a></p>

            </div>
        </div>

    </div> );
}

export default Hero;