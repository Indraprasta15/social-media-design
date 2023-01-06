import "./closeFriends.css";

export default function CloseFriends({user}) {
  return (
    <li className="sidebarfriend">
        <img src={user.profilePicture} alt="" className="sidebarimg" />
        <span className="sidebarfriendname">{user.username}</span>
    </li>
  )
}
