import React, { useEffect, useState } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";


export default function Meetings() {
    
    useEffect(() => {
        const apiKey = "179b84aa-cbaa-41dd-a3af-76c0b88c9b84";
        const meetingId = "demomeet";
        const name = "Recruiter";
    
        const config = {
          name: name,
          meetingId: meetingId,
          apiKey: apiKey,
    
          region: "sg001", // region for new meeting
    
          containerId: null,
          redirectOnLeave: "http://localhost:3000/meetings",
    
          micEnabled: true,
          webcamEnabled: true,
          participantCanToggleSelfWebcam: true,
          participantCanToggleSelfMic: true,
          participantCanLeave: true, // if false, leave button won't be visible
    
          chatEnabled: true,
          screenShareEnabled: true,
          pollEnabled: true,
          whiteboardEnabled: true,
          raiseHandEnabled: true,
    
          recording: {
            autoStart: false, // auto start recording on participant joined
            enabled: true,
            webhookUrl: "https://www.videosdk.live/callback",
            awsDirPath: `/meeting-recordings/${meetingId}/`, // automatically save recording in this s3 path
          },
    
        //   livestream: {
        //     autoStart: false,
        //     enabled: false,
        //   },
    
          layout: {
            type: "SPOTLIGHT", // "SPOTLIGHT" | "SIDEBAR" | "GRID"
            priority: "PIN", // "SPEAKER" | "PIN",
            // gridSize: 3,
          },
    
        //   branding: {
        //     enabled: true,
        //     logoURL:
        //       "https://static.zujonow.com/videosdk.live/videosdk_logo_circle_big.png",
        //     name: "Prebuilt",
        //     poweredBy: false,
        //   },
    
          permissions: {
            pin: true,
            askToJoin: false, // Ask joined participants for entry in meeting
            toggleParticipantMic: false, // Can toggle other participant's mic
            toggleParticipantWebcam: false, // Can toggle other participant's webcam
            drawOnWhiteboard: true, // Can draw on whiteboard
            toggleWhiteboard: true, // Can toggle whiteboard
            toggleRecording: true, // Can toggle meeting recording
            toggleLivestream: true, //can toggle live stream
            removeParticipant: true, // Can remove participant
            endMeeting: true, // Can end meeting
            changeLayout: true, //can change layout
          },
    
          joinScreen: {
            visible: true, // Show the join screen ?
            title: "Interview", // Meeting title
            meetingUrl: window.location.href, // Meeting joining url
          },
    
          leftScreen: {
            // visible when redirect on leave not provieded
            actionButton: {
              // optional action button
              label: "Video SDK Live", // action button label
              href: "http://localhost:3000/meetings", // action button href
            },
          },
    
          notificationSoundEnabled: true,
    
          debug: true, // pop up error during invalid config or netwrok error
    
          maxResolution: "hd", // "hd" or "sd"
    
          // For more features check: /prebuilt/guide/prebuilt-video-and-audio-calling/getting-started
        };
    
        const meeting = new VideoSDKMeeting();
        meeting.init(config);


      }, []);
      

      return <div></div>
}