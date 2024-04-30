// import React, { useEffect } from "react";
// import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";

import { useEffect } from "react";
import Meetings from "./Meetings";
import { useHistory } from "react-router-dom";

export default function MeetingContainer({ setIsMeetingOn }) {
  setIsMeetingOn(true);

  const history = useHistory();

  useEffect(() => {
    const handleNavigation = () => {
      // Reload the page when navigating away from this page
      window.location.reload();
      setIsMeetingOn(false);
    };

    const unlisten = history.listen(handleNavigation);

    return () => {
      unlisten();
    };
  }, [history]);
  
  return <div>
    <Meetings />
  </div>;
}