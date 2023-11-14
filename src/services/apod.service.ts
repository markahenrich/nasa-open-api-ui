import { ApodType } from "../types/apod.type";

export const getApod = async (): Promise<ApodType | null>  => {
    try {
        const res = await fetch('http://localhost:8080/api/v1/apod');
        const data: ApodType = await res.json(); 
        
        return data; 
    } catch(e) {
        console.log('getApod: ' + e);
    }

    return null; 
}