import "./share.css";
import {EmojiEmotions, Label, PermMedia, Room} from "@mui/icons-material";


export default function Share() {
  return (
    <div className="share">
        <div className="sharewrapper">
            <div className="sharetop">
                <img 
                    src="/assets/person/1.jpeg" 
                    alt="" 
                    className="shareprofilimg"
                />
                <input placeholder="What's in your main, Indra?" className="shareinput" />
            </div>
            <hr className="sharehr"/>
            <div className="sharebottom">
                <div className="shareoptions">
                    <div className="shareoption">
                        <PermMedia htmlColor="tomato" className="shareicon"/>
                        <span className="shareoption">Photo or Video</span>
                    </div>
                    <div className="shareoption">
                        <Label htmlColor="blue" className="shareicon"/>
                        <span className="shareoption">Tags</span>
                    </div>
                    <div className="shareoption">
                        <Room htmlColor="green" className="shareicon"/>
                        <span className="shareoption">Location</span>
                    </div>
                    <div className="shareoption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareicon"/>
                        <span className="shareoption">Feelings</span>
                    </div>
                </div>
                <button className="sharebutton">Share</button>
            </div>
        </div>
    </div>
  )
}
