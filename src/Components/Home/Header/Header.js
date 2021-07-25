import React from 'react';
import HeroVideo from '../../HeroVideo/HeroVideo';
import Navbar from '../../Navbar/Navbar';
import "./Header.css"


const Header = () => {



    return (
        <div>

         <Navbar></Navbar>
           <HeroVideo></HeroVideo>
        </div>
    );
};

export default Header;