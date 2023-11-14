import { useEffect, useState } from "react";
import { ApodType } from "../types/apod.type";
import { getApod } from "../services/apod.service";

const Apod = () => {
    const [apod, setApod]= useState<ApodType | null>(null); 

    useEffect(() => {
        (async () => {
            const apod = await getApod(); 
            setApod(apod);
        })();
    }, []); 
    
    return(
        <div>
            <img src={apod?.url} alt='NASA pic of the day'></img>
            <h3>{apod?.title}</h3>
            <h4>{apod?.date}</h4>
            <p>{apod?.explanation}</p>
        </div>
    );
}

export default Apod; 