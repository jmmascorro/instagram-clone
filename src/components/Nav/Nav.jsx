import "./Nav.scss";
import icons from "../../images/Instagram-icons.jpg"
import SearchBox from "../SearchBox/SearchBox";
import { useState } from "react";


const Nav = () => {

    const [searchTerm, setSearchTerm] = useState();

    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
      }
    // const { userName, handleSubmit } = props;
    // const [showSettings, setShowSettings] = useState(false);
    // const [showNav, setShowNave] = useState(false);

    // const toggleSettings = () => {
    //     setShowSettings(!showSettings);
    // };

    // const toggleNav = () => {
    //     setShowNave(!showNav);
    // };


    return (
        <nav className='nav'>
            <h1 className="nav_icon">Instagram</h1>
            <SearchBox searchTerm={searchTerm} handleInput={handleInput}/>
            <div className="nav_img">
            <img alt="Instagram icons" src={icons}/>
            </div>
            
        </nav>
       
    )

}

export default Nav;