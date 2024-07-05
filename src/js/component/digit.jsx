import React from "react";

let Digit = ({digit}) => {
    return (
        <div className="card m-5" style={{width: "10rem"}}>
            <div className="card-body text-center">
                <p className="fs-1">{digit}</p>
            </div>
        </div>
    );
}

export default Digit;