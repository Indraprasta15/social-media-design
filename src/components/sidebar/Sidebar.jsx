import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material';
import './sidebar.css';
import { Users } from "../../dummyData";
import CloseFriends from '../closeFriends/CloseFriends';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarwrapper">
            <ul className="sidebarlist">
                <li className="sidebarlistitem">
                    <RssFeed className="sidebaricon"/>
                    <span className="sidebarlistitemtext">Feed</span>
                </li>
                <li className="sidebarlistitem">
                    <Chat className="sidebaricon"/>
                    <span className="sidebarlistitemtext">Chats</span>
                </li>
                <li className="sidebarlistitem">
                    <PlayCircleFilledOutlined className="sidebaricon"/>
                    <span className="sidebarlistitemtext">Videos</span>
                </li>
                <li className="sidebarlistitem">
                    <Group className="sidebaricon"/>
                    <span className="sidebarlistitemtext">Groups</span>
                </li>
                <li className="sidebarlistitem">
                    <Bookmark className="sidebaricon"/>
                    <span className="sidebarlistitemtext">Bookmarks</span>
                </li>
                <li className="sidebarlistitem">
                    <HelpOutline className="sidebaricon"/>
                    <span className="sidebarlistitemtext">Questions</span>
                </li>
                <li className="sidebarlistitem">
                    <WorkOutline className="sidebaricon"/>
                    <span className="sidebarlistitemtext">Jobs</span>
                </li>
                <li className="sidebarlistitem">
                    <Event className="sidebaricon"/>
                    <span className="sidebarlistitemtext">Events</span>
                </li>
                <li className="sidebarlistitem">
                    <School className="sidebaricon"/>
                    <span className="sidebarlistitemtext">Courses</span>
                </li>
            </ul>
            <button className="sidebarbutton">Show More</button>
            <hr className="sidebarhr" />
            <ul className="sidebarfriendlists">
                {Users.map((u) => (
                    <CloseFriends key={u.id} user={u} />
                ))}
            </ul>
        </div>
    </div>
  )
}
