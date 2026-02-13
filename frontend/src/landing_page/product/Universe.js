import React from 'react';

function Universe() {
    return ( 
        <div className="container mt-5 mb-5 p-5">
            <h2 className="text-center fs-2 mb-3">The Zerodha Universe</h2>
            <p className="text-center fs-6 text-muted mb-5">
                Extend your trading and investment experience even further with our partner platforms
            </p>
            
            <div className='row mt-5'>
                <div className='col-lg-4 col-md-6 p-3 text-center'>
                    <div style={{minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                        <img src='media/images/smallcaseLogo.png' style={{maxHeight: '60px', maxWidth: '100%'}} alt='Smallcase' />
                    </div>
                    <p className='text-muted' style={{fontSize: '0.9rem', lineHeight: '1.6'}}>
                        Thematic investing platform that helps you invest in themes like diversified basket of stocks on ETFs
                    </p>
                </div>
                
                <div className='col-lg-4 col-md-6 p-3 text-center'>
                    <div style={{minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                        <img src='media/images/zerodhaFundhouse.png' style={{maxHeight: '60px', maxWidth: '100%'}} alt='Zerodha Fund House' />
                    </div>
                    <p className='text-muted' style={{fontSize: '0.9rem', lineHeight: '1.6'}}>
                        Our asset management venture that creating simple and transparent index funds to help you save for your Goals
                    </p>
                </div>
                
                <div className='col-lg-4 col-md-6 p-3 text-center'>
                    <div style={{minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                        <img src='media/images/sensibull.png' style={{maxHeight: '60px', maxWidth: '100%'}} alt='Sensibull' />
                    </div>
                    <p className='text-muted' style={{fontSize: '0.9rem', lineHeight: '1.6'}}>
                        Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                    </p>
                </div>
            </div>
            
            <div className='row mt-5 mb-5'>
                <div className='col-lg-4 col-md-6 p-3 text-center'>
                    <div style={{minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                        <img src='media/images/streakLogo.png' style={{maxHeight: '60px', maxWidth: '100%'}} alt='Streak' />
                    </div>
                    <p className='text-muted' style={{fontSize: '0.9rem', lineHeight: '1.6'}}>
                        Systemic trading platform that allows to create and backtest strategies without coding
                    </p>
                </div>
                
                <div className='col-lg-4 col-md-6 p-3 text-center'>
                    <div style={{minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                        <img src='media/images/dittoLogo.png' style={{maxHeight: '60px', maxWidth: '100%'}} alt='Ditto' />
                    </div>
                    <p className='text-muted' style={{fontSize: '0.9rem', lineHeight: '1.6'}}>
                        Personalized advice on life and health insurance. No spam and no mis-selling.
                    </p>
                </div>
                
                <div className='col-lg-4 col-md-6 p-3 text-center'>
                    <div style={{minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                        <img src='media/images/tijori.png' style={{maxHeight: '60px', maxWidth: '100%'}} alt='Tijori' />
                    </div>
                    <p className='text-muted' style={{fontSize: '0.9rem', lineHeight: '1.6'}}>
                        Investment research platform that offers detailed insight on stocks, sectors, supply chains, and more
                    </p>
                </div>
                <button className='p-3 btn btn-primary fs-5 mb-5 mt-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
            </div>

        </div> 
    );
}

export default Universe;