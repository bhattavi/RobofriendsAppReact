import React, {Component} from 'react';
import 'tachyons';

const Cards = (props) => {

    return(
        <div className="bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow">
            <img src={"https://robohash.org/" + props.name + "?200*200"} alt="robots"/>
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>
        </div>
    );
}
export default Cards;