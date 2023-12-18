import React from 'react';
import { useState, useEffect } from 'react';
import { FetchPhotoSearch, FetchPhotos } from '../util/api';
import Masonry from 'react-masonry-css';


function Main({query,orientation}) {
    const [photos, setPhotos] = useState([]);
    let photo;
    useEffect(()=>{
        const getPhotos = async (query)=>{
            if(query === null){
                photo = await FetchPhotos(orientation);
                setPhotos(photo);
            }else{
                photo = await FetchPhotoSearch(query,orientation);
                setPhotos(photo);
            }
        };

        getPhotos(query,orientation);
    },[ query,orientation]);

    // breakpoints for masonry layout
    const breakpointColumnsObj = {
    default: 4,
        1500: 3,
        1100: 2,
        700: 1,
        600: 1
    };


  return (
    <>
        <div className='grid'>
        {/* Display photos */}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                    {photos.map(photo => (
                        <div key={photo.id} className='w-full h-full rounded-md'>
                            <img className='object-cover rounded-md' src={photo.urls.regular} alt={photo.alt_description}/>
                        </div>
                    ))}
            </Masonry>
        </div>
    </>
  )
}

export default Main