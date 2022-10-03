import "./Nav.scss";
import icons from "../../images/Instagram-icons.jpg"
import SearchBox from "../SearchBox/SearchBox";


const Nav = () => {


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
            <h1>Instagram</h1>
            <SearchBox/>
            <div className="nav_img">
            <img alt="Instagram icons" src={icons}/>
            </div>
        </nav>
       
    )

}

export default Nav;