import React from 'react';
import PastLaunches from '../../PastLaunches/PastLaunches';
import Program from '../../Programmes/Program';
import "./Home.css"
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';


const Home = () => {
    return (
        <main>
            <div >

                <Header></Header>
                <Program></Program>
                <PastLaunches></PastLaunches>
                <Footer></Footer>

            </div>
        </main>
    );
};

export default Home;