import React from "react";
import { useParams } from "react-router-dom";

export default function Country(){
    const params = useParams();
    const {countryId} = params;

    return(
        <div>
            <p>{countryId}</p>
        </div>
    )
}