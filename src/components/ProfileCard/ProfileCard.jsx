import "./ProfileCard.scss";

const ProfileCard = ({picture, name, posts, followers, following, title, hashtag, 
    email, website, image1, image2, image3, image4, image5}) => {

    return (
        <div className="home">
            <header className="profile">
            <img className="profile_pic" alt="profilepic" src={picture} />
                <div className="profile_info">
                    <h1 className="profile_name">{name}</h1>
                        <section className="follow">
                            <p className="follow_p"><strong>{posts}</strong>posts</p> 
                            <p className="follow_p"><strong>{followers}</strong>followers</p> 
                            <p className="follow_p"><strong>{following}</strong>following</p>
                        </section>
                        <section className="profile_contact">
                            <h2>{title}</h2>
                            <p>The {hashtag} channel</p>
                            <p>submit: hashtag or link below!</p>
                            <p>collab: {email}</p>
                            <a href={website}>MYWEBSITE</a>
                        </section>
                </div>
                <button className="profile_btn">Follow</button>
            </header>
            <div className="home_bottom">
                <div className="column">
                    <img className="insta_pic" alt="profile pic" src={image1}/>
                    <img className="insta_pic" alt="profile pic" src={image2}/>
                    <img className="insta_pic" alt="profile pic" src={image3}/>
                    <img className="insta_pic" alt="profile pic" src={image4}/>
                    <img className="insta_pic" alt="profile pic" src={image5}/>
                </div>  
            </div>
        </div>
        
    )
}

export default ProfileCard;