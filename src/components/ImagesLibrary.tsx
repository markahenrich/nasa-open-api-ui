import { getSearchResults } from "../services/imageslibrary.service";

const ImagesLibrary = () => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const imgSearch = formData.get('img-search')?.toString();
        if (!imgSearch) return; 
        const searchResults = await getSearchResults(imgSearch); 
        console.log(searchResults);
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="img-search" placeholder=""></input>
            <button type="submit">Search</button>
        </form>
    );
}

export default ImagesLibrary; 