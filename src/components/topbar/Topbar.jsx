import './topbar.css';
import { Chat, Notifications, Person, Search } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarleft'>
            <span className='logo'>Inda-Social</span>
        </div>
        <div className='topbarcenter'>
            <div className='searchbar'>
                <Search className='search'/>
                <input placeholder='Search for friend, post or video' className='searchinput' />
            </div>
        </div>
        <div className='topbarright'>
            <div className='topbarlinks'>
                <span className='topbarlink'>Homepage</span>
                <span className='topbarlink'>Timeline</span>
            </div>
            <div className='topbaricons'>
                <div className='topbaricon'>
                    <Person />
                    <span className='topbariconbadge'>1</span>
                </div> 
                <div className='topbaricon'>
                    <Chat />
                    <span className='topbariconbadge'>2</span>
                </div> 
                <div className='topbaricon'>
                    <Notifications />
                    <span className='topbariconbadge'>1</span>
                </div>
            </div>
            <img src='/assets/person/1.jpeg' alt='' className='topbarimg'/>
        </div>
    </div>
  )
};