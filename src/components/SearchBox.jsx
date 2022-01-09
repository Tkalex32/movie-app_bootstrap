const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div className="col col-sm-4">
      <input
        type="text"
        className="form-control"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchBox;
