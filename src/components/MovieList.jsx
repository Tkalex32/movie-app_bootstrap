const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => {
        const { Poster, Title, imdbID, Year, Type } = movie;
        return (
          <div
            key={imdbID}
            className="image-container d-flex justify-content-start m-3"
          >
            <img src={Poster} alt={Title} />
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
