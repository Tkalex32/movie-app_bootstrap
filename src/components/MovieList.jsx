const MovieList = ({ movies, favouriteComponent, handleFavouritesClick }) => {
  const FavouriteComponent = favouriteComponent;
  return (
    <>
      {movies.map((movie) => {
        const { Poster, Title, imdbID, Year, Type } = movie;
        return (
          <div
            key={imdbID}
            className="image-container d-flex justify-content-start m-3"
            onClick={() => handleFavouritesClick(movie)}
          >
            <img src={Poster} alt={Title} />
            <div className="overlay d-flex align-items-center justify-content-center">
              <FavouriteComponent />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
