let searchUrl;
let randomUrl;
let count = 20;
const accessKey = 'NFhkyJWaIHCOAK8_qsgZCtnejyX7PjYYgXg7ZPPAV3w';



// If there's a search query, use the search endpoint
searchUrl = `https://api.unsplash.com/search/photos/`;

// If no search query, use the random photos endpoint
randomUrl = `https://api.unsplash.com/photos/`;



export const FetchPhotos = async (orientation)=> {
    try {
        const fetchedPhotos = await fetch(`${randomUrl}?client_id=${accessKey}&per_page=${count}&orientation=${orientation}`);
        const result = await fetchedPhotos.json();
        return result;
    } catch (error) {
        alert('Failed to fetch photos')
    }
} 

export const FetchPhotoSearch = async (query,orientation)=> {
    try {
        const fetchedPhotos = await fetch(`${searchUrl}?client_id=${accessKey}&query=${query}&per_page=${count}&orientation=${orientation}`);
        const searchResult = await fetchedPhotos.json();
        return searchResult.results;
    } catch (error) {
        alert('Failed to fetch photos')
    }
}