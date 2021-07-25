import React from 'react';

import { useEffect, useState } from 'react';
import PastLaunch from './PastLaunch/PastLaunch';

const PastLaunches = () => {
    const [launches, setLaunches] = useState([])
    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/past")
            .then(res => res.json())
            .then(data => {
                const slicedLaunch = data.slice(0, 8)
                setLaunches(slicedLaunch)
            })
    }, [])
    return (
        <section id="projects">
            <div className="container">
                <h1 class="py-5 text-center fw-bold">OUR PAST LAUNCHES </h1>
                {launches.length === 0 ?

                    <div class="text-center py-5 my-5">
                        <div class="spinner-border text-primary" role="status">
                           
                        </div>
                    </div>
                    :
                    <div class="row">
                        {
                            launches.map(launch => <PastLaunch launch={launch}></PastLaunch>)
                        }
                    </div>

                }

            </div>
        </section>
    );
};

export default PastLaunches;