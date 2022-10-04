import "./SearchBox.scss";

const SearchBox = (props) => {
    // const { label, searchTerm, handleInput } = props;
    // const capitalizedLabel = label[0].toUpperCase() + label.slice(1);
    const { searchTerm, handleInput } = props; 

    return (
        <form className="search-box" name="form">
            <label className="search-box__label"></label>
            <input type="text" placeholder="Search Profile"
            value={searchTerm} onInput={handleInput} 
            className="search-box__input"/>
        </form>
    )
}

export default SearchBox;