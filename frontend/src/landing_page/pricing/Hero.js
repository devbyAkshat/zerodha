import React from 'react';

function Hero() {
    return (  
        <div className='container'>
            <div className='row text-center mt-5 mb-5 p-5'>
                <h1 className='fs-2'>Charges</h1>
                <p className='text-muted fs-5 mt-3'>List of all charges and taxes</p>
            </div>
            
            <div className='row mt-5 p-3'>
                <div className='col-lg-4 col-md-4 col-sm-12 text-center p-4'>
                    <img src='/media/images/pricing0.svg' style={{maxHeight: '200px', maxWidth: '100%'}} alt='Free equity delivery' />
                    <h3 className='fs-4 mt-4 mb-3'>Free equity delivery</h3>
                    <p className='text-muted'>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                
                <div className='col-lg-4 col-md-4 col-sm-12 text-center p-4'>
                    <img src='/media/images/intradayTrades.svg' style={{maxHeight: '200px', maxWidth: '100%'}} alt='Intraday and F&O trades' />
                    <h3 className='fs-4 mt-4 mb-3'>Intraday and F&O trades</h3>
                    <p className='text-muted'>
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                
                <div className='col-lg-4 col-md-4 col-sm-12 text-center p-4'>
                    <img src='/media/images/pricing0.svg' style={{maxHeight: '200px', maxWidth: '100%'}} alt='Free direct MF' />
                    <h3 className='fs-4 mt-4 mb-3'>Free direct MF</h3>
                    <p className='text-muted'>
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;