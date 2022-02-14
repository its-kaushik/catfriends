const SearchBar = ({ onSearchChange }) => {
    return (
        <div className="text-center my-4" >
            <input 
                placeholder="Search For Cats"
                className="text-center" 
                onChange={onSearchChange}
            />
        </div>
    )
}

export default SearchBar ;