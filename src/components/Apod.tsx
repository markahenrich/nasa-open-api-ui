import { useEffect, useState } from "react";
import { ApodType } from "../types/apod.type";

const Apod = () => {
    const [apod, setApod]= useState<ApodType | null>(null); 

    useEffect(() => {
        const getApod = async () => {
            try {
                const res = await fetch('http://localhost:8080/api/v1/apod');
                const data: ApodType = await res.json(); 

                setApod(data);
            } catch(e) {
                console.log(e);
            }
        }
        getApod(); 
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