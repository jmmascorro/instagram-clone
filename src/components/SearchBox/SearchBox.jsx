import "./SearchBox.scss";

const SearchBox = () => {
    // const { label, searchTerm, handleInput } = props;
    // const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

    return (
        <form className="search-box">
            <input
            type="text"
            name="search"
            placeholder="Search"
            className="search-box_input"
            />
        </form>
    )
}

export default SearchBox;