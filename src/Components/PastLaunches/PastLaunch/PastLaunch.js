import React from 'react';
import "./PastLaunch.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

const PastLaunch = ({ launch }) => {

    return (
        <div class="col-md-6  col-lg-4 col-xl-3 cart-container "> 
    
            <div  class="card rounded " >
                <img src={launch.links.mission_patch} class="card-img-top" alt="..."></img>
                <div class="card-body">
                <div class="d-flex card-info align-items-center ">
                <h6 class="pb-2" >mission  {launch.flight_number} </h6>
                <p class=" text-muted mx-2"> {launch.launch_year} </p>
                <p class=" text-muted "> {launch.mission_name} </p>
                </div>
           
               
                    <h6 class="card-text pb-4">{launch.details===null? "     Lorem ipsum dolor sit amet consectetur adipisicing elit." :`${launch.details.slice(0, 55) } .`}</h6>
                    <a class="text-decoration-none  " href="https://www.wikipedia.org/"> <FontAwesomeIcon class="icon-color" icon={faChevronCircleRight} /><span  > Go To wikipedia page</span> </a>
                </div>
            </div>
        </div>
    );
};

export default PastLaunch;