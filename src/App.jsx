import './App.scss';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/ProfileContainer/ProfileContainer';
import profiles from "./data/profiles.js";



function App() {
  return (
    <div className="App">
      <Nav />
      <ProfileContainer profiles={profiles}/>

    </div>
  );
}

export default App;
