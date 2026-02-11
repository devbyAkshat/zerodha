import React from 'react';

function Team() {
    return ( 
        <div className='container border-top'>
            <div className='row mt-5 mb-5 text-center '>
                <h1 className='fs-3'>People</h1>
            </div>

            <div className='row mt-5 p-5 '>
                <div className='col-6 text-center'>
                    <img src="..\media\images\nithinKamath.jpg" style={{borderRadius:"100%" , height:"300px"}} />
                    <h3 className='mt-5'>Nithin Kamath</h3>
                    <p className='mt-4'>Founder , CEO</p>
                </div>
                <div className='col-6 fs-5 text-start text-muted'>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                         hurdles he faced during his decade long stint as a trader. Today,
                          Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
                         and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>Connect on Homepage / TradingQnA / Twitter</p>

                </div>
                </div>   
        </div>
    
 );
}

export default Team;