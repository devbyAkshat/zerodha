import React from 'react';

function RightSection({
    imageURL, 
    productName,
    productDescription, 
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 
        <div className='container '>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-6 p-5'>
                    <h1 className='fs-2'>{productName}</h1>
                    <p className='mt-3 fs-6 text-muted'>{productDescription}</p>
                    
                    <div className='mt-4'>
                        <a href={learnMore} style={{textDecoration:"none"}} >
                            Learn More <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                    </div>

                    <div className='mt-4'>
                        <a href={googlePlay}>
                            <img src='media/images/googlePlayBadge.svg' alt='Get it on Google Play' style={{marginRight: "20px"}} />
                        </a>
                        <a href={appStore}>
                            <img src='media/images/appStoreBadge.svg' alt='Download on App Store' />
                        </a>
                    </div>
                </div>
                
                <div className='col-lg-6 col-md-6 p-5'>
                    <img src={imageURL} className='img-fluid' alt={productName} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;