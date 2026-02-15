import React from 'react';

function Hero() {
    return (  
        <div className='container py-5'>
            <div className='row text-center mt-5 mb-5'>
                <div className='col'>
                    <h1 className='display-4 fw-normal fs-1'>Charges</h1>
                    <p className='text-muted fs-5 mt-3'>List of all charges and taxes</p>
                </div>
            </div>
            
            <div className='row g-4 mt-4 mb-5'>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='text-center p-4'>
                        <img 
                            src='/media/images/pricing0.svg' 
                            style={{height: '180px', width: 'auto'}} 
                            alt='Free equity delivery' 
                        />
                        <h3 className='fs-5 fw-semibold mt-4 mb-3'>Free equity delivery</h3>
                        <p className='text-muted'>
                            All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
                        </p>
                    </div>
                </div>
                
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='text-center p-4'>
                        <img 
                            src='/media/images/intradayTrades.svg' 
                            style={{height: '180px', width: 'auto'}} 
                            alt='Intraday and F&O trades' 
                        />
                        <h3 className='fs-5 fw-semibold mt-4 mb-3'>Intraday and F&O trades</h3>
                        <p className='text-muted'>
                            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                        </p>
                    </div>
                </div>
                
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <div className='text-center p-4'>
                        <img 
                            src='/media/images/pricing0.svg' 
                            style={{height: '180px', width: 'auto'}} 
                            alt='Free direct MF' 
                        />
                        <h3 className='fs-5 fw-semibold mt-4 mb-3'>Free direct MF</h3>
                        <p className='text-muted'>
                            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;