import { useState } from "react";
import { getSearchResults } from "../services/imageslibrary.service";
import { Image } from "../types/imageslibrary.type";

const ImagesLibrary = () => {
    const [images, setImages] = useState<Image[] | null | undefined>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const imgSearch = formData.get('img-search')?.toString();
        if (!imgSearch) return; 
        const searchResults = await getSearchResults(imgSearch); 
        setImages(searchResults?.collection.items);
        console.log(images);
    }

    return(
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="img-search" placeholder=""></input>
                <button type="submit">Search</button>
            </form>
            {
                images?.map((image) => {
                    return (
                        <>
                            <img src={image.links?.length > 0 ? image.links[0].href : ''} alt=""/>
                        </>
                    )
                })
            }
        </>
    );
}

export default ImagesLibrary; 