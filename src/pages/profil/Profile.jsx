import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Profile() {
  return (
    <>
        <Topbar />
        <div className="profile">
            <Sidebar />
            <div className="profileright">
              <div className="profilerighttop">
                <div className="profilepicture">
                  <img src="assets/post/4.jpeg" alt="" className="profilepictureimg" />
                  <img src="assets/person/7.jpeg" alt="" className="profilepictureuser" />
                </div>
                <div className="profileinfo">
                  <h4 className="profileinfoname">Dhay Anna</h4>
                  <span className="profileinfodesc">Hello my friends!</span>
                </div>
              </div>
              <div className="profilerightbottom">
                <Feed />
                <Rightbar profile/>
              </div>
            </div>
        </div>
    </>
  )
}
