import React from "react";
import { useState, useEffect, useContext } from "react";
import { FetchPhotoSearch, FetchPhotos } from "../util/api";
import Masonry from "react-masonry-css";
import queryContext from "../contex/queryContext";

function Main() {
  // imported context for using the state modified by header component//
  const qContxt = useContext(queryContext);

  // cretated photos state with initial value of empty array//
  const [photos, setPhotos] = useState([]);

  // created photo variable to store results fetched from the API endpoint//
  let photo;

  // created searchQuery, searchOrientation variable to store state received from query context modified by header component//
  let searchqQuery = qContxt.query;

  let searchOrientation = qContxt.orientation;

  //   use effect hook that runs once when the page loads and again every time the query in the provider changes.//
  //   It will call the FetchPhotos or FetchPhotoSearch function//
  //   depending on whether a search was made or not//
  useEffect(() => {
    //An Async getPhotos function is created to fetch the photos using FetchPhotos/FetchPhotoSearch
    const getPhotos = async () => {
      if (searchqQuery === "") {
        photo = await FetchPhotos(searchOrientation);
        setPhotos(photo);
      } else {
        photo = await FetchPhotoSearch(searchqQuery, searchOrientation);
        setPhotos(photo);
      }
    };

    getPhotos();
  }, [searchqQuery, searchOrientation]); //Dependency Array has two variable so that useEffect will run depending on whether a search was made or not//

  // breakpoints for masonry layout to make the layout responsive with respective screen width//
  const breakpointColumnsObj = {
    default: 4,
    1500: 3,
    1100: 2,
    700: 1,
    600: 1,
  };

  return (
    <>
      <div className="grid">
        {/* Masonry JS library is used to display Fetched images in Masonry grid
        layout to improve the visual representation  */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {/* Map function is used to map the images received from API inside the
          Main component */}
          {photos.map((photo) => (
            <div key={photo.id} className="w-full h-full rounded-md">
              <img
                className="object-cover rounded-md"
                src={photo.urls.regular}
                alt={photo.alt_description}
              />
            </div>
          ))}
        </Masonry>
      </div>
    </>
  );
}

export default Main;
