import React from "react";
import { useParams } from "react-router-dom";

export default function Country(){
    const params = useParams();
    const {countryIndex} = params;

    return(
        <div>
            <p>{countryIndex}</p>
        </div>
    )
}