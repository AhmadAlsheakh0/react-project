import React from 'react';
import './header.css';
import SearchBox from './search';

const Header = ()=> {
    
    return (
        <>
        <div className='header'>
            <div className='header-container'>
                <div className="logo">
                    <div className="center">
                        <a href="#" title="Ballard Design Logo">
                            <img src="https://static2.ballarddesigns.com/wcsstore/images/BallardDesigns/header/BallardDesigns_SiteLogo.svg" />
                        </a>
                    </div>
                </div>

                <div className="bottom">
                        <div className="left">
                            <div id="designService">
                               <a href="#">Design Services</a> 
                            </div>

                            <div id="referAFriend">
                                <a href="#">Refer a Friend, Get $50 Off!</a>
                            </div>
                        </div>

                        <div className="right">
                               <SearchBox />
                        </div>
                    </div>
            </div>
            
        </div>
        </>
    );
}
export default Header;
