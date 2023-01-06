import './rightbar.css';
import { Users } from "../../dummyData";
import Online from '../online/Online';

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
   return (
      <>
        <div className="birthdaycontainer">
          <img src="/assets/post/gift.png" alt="" className="birthdayimg" />
          <span className="birthdaytext">
            <b>Pola Foster</b> and <b>8 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/post/ad.jpeg" alt="" className="rightbarad" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarfriendsonline">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
   )
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbartitle">User Informaton</h4>
        <div className="rightbarinfo">
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">City : </span>
            <span className="rightbarinfovalue">New York</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">From : </span>
            <span className="rightbarinfovalue">Paris</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">Relationship : </span>
            <span className="rightbarinfovalue">Single</span>
          </div>
        </div>
        <h4 className="rightbartitle">User Friends</h4>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img src="assets/person/2.jpeg" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Jess Icca</span>
          </div>
          <div className="rightbarfollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Jess Icca</span>
          </div>
          <div className="rightbarfollowing">
            <img src="assets/person/4.jpeg" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Jess Icca</span>
          </div>
          <div className="rightbarfollowing">
            <img src="assets/person/5.jpeg" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Jess Icca</span>
          </div>
          <div className="rightbarfollowing">
            <img src="assets/person/6.jpeg" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Jess Icca</span>
          </div>
          <div className="rightbarfollowing">
            <img src="assets/person/8.jpeg" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Jess Icca</span>
          </div>
        </div>
      </>
    )
  };

  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}  
      </div>
    </div>
  )
}
