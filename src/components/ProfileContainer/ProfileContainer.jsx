import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfileContainer.scss";

const ProfileContainer = (props) => {

    const { profiles } = props;

    const mappedProfiles = profiles.map((data) => {
        return (
            <ProfileCard picture={data.thumbnail} name={data.instaName}
             posts={data.posts} followers={data.followers} following={data.following} title={data.title} 
             hashtag={data.hashtag} email={data.email} website={data.email} image1={data.image1} image2={data.image2}
             image3={data.image3} image4={data.image4} image5={data.image5}/> 
        )
    })

    return (
        <div className="profiles">
            {mappedProfiles}
        </div>
    )
}

export default ProfileContainer;