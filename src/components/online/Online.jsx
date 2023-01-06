import "./online.css";

export default function Online({user}) {
  return (
    <li className="rightbarfriend">
        <div className="rightbarppcontainer">
            <img src={user.profilePicture} alt="" className="rightbarppimg" />
            <span className="rightbaronline"></span>
        </div>
        <span className="rightbarusername">{user.username}</span>
    </li>
  )
}
