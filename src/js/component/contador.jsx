import React from "react";
import Digit from "./digit";


let Contador = ({number}) => {
    
    const one = Math.floor(number/1)%10;
    const two = Math.floor(number/10)%10;
    const three = Math.floor(number/100)%10;
    const four = Math.floor(number/1000)%10;
    const five = Math.floor(number/10000)%10;

    return (

        <div className="container">
			
            <div className="card bg-dark">
            <div className="card-body d-flex justify-content-center">
                
                <Digit digit="🕟"/>
                <Digit digit={five}/>
                <Digit digit={four}/>
                <Digit digit={three}/>
                <Digit digit={two}/>
                <Digit digit={one}/>
                 
            </div>
        </div>
			
		</div>

       
    );
}

export default Contador;