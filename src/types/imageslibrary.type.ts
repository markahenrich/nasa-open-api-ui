
export type ImagesLibraryResponseType = {
    collection: ImageCollection;
} 

export type ImageCollection = {
    version: string;
    href: string; 
    items: Image[]; 
    metadata: Metadata;
    links: ImageCollectionLink[]; 
}

export type Image = {
    href: string; 
    data: ImageData[];
    links: ImageLink[]; 
}

export type ImageData = {
    center: string;
    title: string;
    nasa_id: string;
    date_created: string; 
    keywords: string[]; 
    media_type: string;
    description_508: string;
    secondary_creator: string;
    description: string; 
}

export type ImageLink = {
    href: string;
    rel: string;
    render: string;
}

export type Metadata = {
    total_hits: string;
}

export type ImageCollectionLink = {
    rel: string; 
    prompt: string; 
    href: string; 
}