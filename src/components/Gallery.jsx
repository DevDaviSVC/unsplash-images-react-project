import { useGetImages, useSearchImages } from "../react-query/reactQueryHooks";

const Gallery = () => {
  const {data, getIsPending, isError, error} = useGetImages();
  const {searchIsPending} = useSearchImages();

  if (getIsPending || searchIsPending) {
    return <div className="image-container">
        <span className="loading"></span>
      </div>;
  }

  if (isError) {
    console.log(error);
    
    return <div className="image-container">
      <h4>There was an error...</h4>
    </div>
  }

  return (
    <div className="image-container">
      {data.length > 0 ? data.map(image => (
        <img src={image.urls.small} alt={image.alt_description} className="img" key={image.id} />
      )) : <h2>No results found...</h2>}
    </div>
  )
}
export default Gallery;