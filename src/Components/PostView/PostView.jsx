import React from "react";
import ChildContainer from "./childContainer";
import "./postView.css";
import SiteHeader from "./siteHeader";
import Hayabusa from "../images/Hayabusa.jpg"
import zx10r from "../images/zx10rr.jpg"
import smile  from "../images/smile.jpg"
import cbr1000rr from "../images/cbr1000rr.jpg"


const PostView = () => {
      return (
            <div id="postContainer">
                  <div id="logoNav"><SiteHeader /></div>
                  <div id="childContainer"  ><ChildContainer src={Hayabusa} name="Kiran" likes="111" location="India" description="This is Description for Instaclone project 1"/></div>
                  <div id="childContainer2" ><ChildContainer src={zx10r} name="Bridge" likes="200" location="England" description="This is Description for Instaclone project 2"  /></div>
                  <div id="childContainer3" ><ChildContainer src={smile} name="Factory" likes="251" location="L.V California" description="This is Description for Instaclone project 3"/></div>
                  <div id="childContainer4" ><ChildContainer src={cbr1000rr} name="Sea" likes="2000" location="INDIA" description="This is Description for Instaclone project 4"/></div>
            </div>
      )
}

export default PostView;