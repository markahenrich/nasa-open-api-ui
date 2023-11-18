import { ImagesLibraryResponseType } from "../types/imageslibrary.type";

export const getSearchResults = async (query: string): Promise<ImagesLibraryResponseType | null> => {
    try {
        const res = await fetch(`http://localhost:8080/api/v1/images/search?q=` + query); 
        const data = await res.json();

        return data;
    } catch(e) {
        console.log('getSearchResults: ' + e); 
    }

    return null; 
}