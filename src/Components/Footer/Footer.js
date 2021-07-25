import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import colorLogo from '../../image/SpaceX-Logo.svg'
import "./Footer.css"

const Footer = () => {


    const contactNamed = [
        { name: "+32 484 26 77 94" },
        { name: "+32 484 26 77 94" },
        { name: "info@spacex.com" }

    ]
    const aboutUs = [
        { name: "About us", link: "/emergency" },
        { name: "Careers", link: "/emergency" },
        { name: "Shop", link: "/emergency" }

    ]
    const socilalMedia = [
        { name: "Facebook", link: "www.facebook.com" },
        { name: "Twitter", link: "www.twitter.com" },
        { name: "Vimeo", link: "www.vimeo.com" },

    ]
    const RocketsName = [
        { name: "Falcon Heavy", link: "/emergency" },
        { name: "Falcon 9", link: "/emergency" },
        { name: "Falcon 1", link: "/emergency" },

    ]




    return (
        <footer id="contact" class="footer-container" >
                <div className="row  mx-2">  
                    <div  className="col-md-8 ">
                        <div className="row">

                            <FooterCol key={1} menuTitle={"CONTACTS"} menuItems={contactNamed}></FooterCol>
                            <FooterCol key={2} menuTitle={"ABOUT"} menuItems={aboutUs}></FooterCol>
                            <FooterCol key={3} menuTitle={"SOCIAL MEDIA"} menuItems={socilalMedia}></FooterCol>
                            <FooterCol key={4} menuTitle={"ROCKETS"} menuItems={RocketsName}></FooterCol>

                        </div>
                    </div>
                    <div className="col-md-4 bg-light newsletter py-5">
                        <h6 class="pb-5 fw-bold">Get Update</h6>
                        <p class="pb-3">Subscribe and updates about our rocket launches and everything around SpeceX </p>


                        <div class="input-group">
                            <input type="text" placeholder="Example@impact.org" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"></input>
                            <span class="input-group-text btn btn-primary">OK</span>
                        </div>

                    </div>
                </div>
                <div  class=" copyrightContainer container  ">
                    <div>
                        <small>
                            @ 2019 SPACE EXPLORATION TECHNOLOGIES CORP
                        </small>
                    </div>
                    <div>
                        <img src={colorLogo} class="img-fluid" alt="" />
                        
                    </div>
                </div>
           
        </footer>
    );
};

export default Footer;