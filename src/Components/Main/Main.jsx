import React, {} from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Main(){
    return(
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Card />
            </div><br/><br/><br/>
            <div>
                <Footer />
            </div>
        </div>
       
    )
}