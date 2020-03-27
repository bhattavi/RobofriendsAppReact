import React from 'react';
import 'tachyons';

const Card = (props) => {
const {id, name, email} = props;
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow">
            <img src={"https://robohash.org/" + id + "?200*200"} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;