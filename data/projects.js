module.exports = {
  projects: [
    {
      projectId: 23,
      title: "WebRTC Real-time Conferencing",
      description:
        "WebRTC conferencing platform with support for video and audio chatting in a room based system.",
      markDown:
        "<h4>Objectives</h4><body1>The goal of this project was to build something with the WebRTC protocol. I did some research and decided to use the open source Kurento Media server for \tthe media aspect of the project since it's free and supports WebRTC selective forwarding. I decided to build the application/signaling server in .net core since it's my go-to framework. I decided to also learn react hooks in this project as I built out the front-end.   </body1><h4>Technology stack</h4><list> Front End: React (16.8.6 with hooks), Redux for state management, and Material UI for styling, Back End (application / signaling server): asp.net core 2.2, Back End (media server): Kurento Media Server, Back End (turn server): Coturn</list><h4>Features</h4><h5>Real-time conferencing</h5><list>Video/web cam chat support,Audio chat support,Text-based chat support,public / private room based system</list><h5>Low-latency scalable media server </h5><list>Uses Selective forwarding unit instead of P2P to cut down on client bandwidth,Signaling server communicates with media server via JSON-RPC,Deployed on an AWS ec2 ubuntu instance</list>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 88,
          projectId: 23,
          link: "https://images.jrdn.tech/jchat-0.PNG",
        },
        {
          imageId: 89,
          projectId: 23,
          link: "https://images.jrdn.tech/jchat-1.PNG",
        },
        {
          imageId: 90,
          projectId: 23,
          link: "https://images.jrdn.tech/jchat-2.PNG",
        },
        {
          imageId: 91,
          projectId: 23,
          link: "https://images.jrdn.tech/jchat-3.PNG",
        },
      ],
      sourceLink: "",
      demoLink: "https://chat.jrdn.tech/rooms",
      priority: 0,
    },
    {
      projectId: 11,
      title: "JRadio",
      description:
        "Online radio web app for listening to Youtube and Soundcloud audio with others",
      markDown:
        "<h4>Objectives</h4><body1>The goal of this project was to create an online radio for people to listen to Youtube and Soundcloud music together. The inspiration for thiscame from lifting with friends at the gym and wanting some type of free cross-platform service for listening to music/mixes together at a synchronizedrate. I decided that the easiest way to create this radio was to make the front-end a responsive web app. I made the back-end with express.  </body1><h4>Technology stack</h4><list> Front End: React with Material UI being rendered server-side by Next.js, Back End: Express back-end running on an Amazon Linux EC2 instance</list><h4>Features</h4><h5>Supports all valid Youtube links</h5><h5>Supports all valid Soundcloud links </h5><list>Music downloads and streams to listeners at synchronized time,Audio is disposed of when song is done playing,Songs can be skipped</list><h5>Live user chat</h5><list>Real-time,Uses web sockets</list>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 42,
          projectId: 11,
          link: "https://images.jrdn.tech/radio-0.JPG",
        },
        {
          imageId: 43,
          projectId: 11,
          link: "https://images.jrdn.tech/radio-1.JPG",
        },
      ],
      sourceLink: "https://github.com/jriley15/jradio",
      demoLink: "https://radio.jrdn.tech/",
      priority: 1,
    },
    {
      projectId: 22,
      title: "Enterprise Employee Status Web app",
      description:
        "Free lance enterprise web app I built for a company to help keep track of their employee statuses.",
      markDown:
        "<h4>Objectives</h4><body1>The goal of this project was to create an employee status management system for a professional company. They requested a central system where their employees could login to and update or view their current availability statuses. They requested that the web application be accessible on mobile as well as desktop. They also requested that users be able to enter a schedule or update their status manually. </body1><h4>Technology stack</h4><list> Front End: React with Material UI on AWS S3,  Back End: .NET core 2.2 web api on AWS ec2, Database: PostgreSQL on AWS RDS</list><h4>Features</h4><h5>User authentication</h5><h5>Dynamically updating user status schedules</h5><h5>Admin panel for user / location management</h5>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 83,
          projectId: 22,
          link: "https://images.jrdn.tech/mm-0.JPG",
        },
        {
          imageId: 84,
          projectId: 22,
          link: "https://images.jrdn.tech/mm-1.JPG",
        },
        {
          imageId: 85,
          projectId: 22,
          link: "https://images.jrdn.tech/mm-2.JPG",
        },
        {
          imageId: 86,
          projectId: 22,
          link: "https://images.jrdn.tech/mm-3.JPG",
        },
        {
          imageId: 87,
          projectId: 22,
          link: "https://images.jrdn.tech/mm-4.JPG",
        },
      ],
      sourceLink: "",
      demoLink: "https://mm.jrdn.tech",
      priority: 2,
    },
    {
      projectId: 21,
      title: "YarbTV",
      description:
        "RTMP live streaming platform built using nginx, .net core, and postgresql",
      markDown:
        "<h4>Objectives</h4><body1>The goal of this project was to create a live streaming platform by plugging together open source technologies and wrapping it all together with a nice React UI.   </body1><h4>Technology stack</h4><list> Front End: React with Material UI (Razzle.js for SSR), Back End: .net core 2.2, nginx compiled with rtmp module, and postgresql database</list><h4>Features</h4><h5>User registration / authentication / stream keys</h5><h5>RTMP live streaming</h5><list>Stream from any standard RTMP client like OBS,Small delays,Thumbnails captured when stream starts</list><h5>Live user chat</h5><list>Real-time,Uses signalR</list><h5>Fully responsive UI</h5>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 78,
          projectId: 21,
          link: "https://images.jrdn.tech/live-0.JPG",
        },
        {
          imageId: 79,
          projectId: 21,
          link: "https://images.jrdn.tech/live-1.JPG",
        },
        {
          imageId: 80,
          projectId: 21,
          link: "https://images.jrdn.tech/live-2.JPG",
        },
        {
          imageId: 81,
          projectId: 21,
          link: "https://images.jrdn.tech/live-3.JPG",
        },
        {
          imageId: 82,
          projectId: 21,
          link: "https://images.jrdn.tech/live-4.JPG",
        },
      ],
      sourceLink: "https://github.com/jriley15/live",
      demoLink: "https://live.jrdn.tech/",
      priority: 3,
    },
    {
      projectId: 14,
      title: "Tetris",
      description: "Tetris emulation built using node/express with web sockets",
      markDown:
        "<h4>Objectives</h4><body1>The goal of this project was to explore web sockets with express using node. I decided to re-make Tetris since it's an easy yet challenging game concept to implement. I used web sockets instead of a completelyclient side solution because my original plan was to make the game multi-player. After implementing all of thecore game logic, I decided to start working on something else instead of adding a multi-player mode.</body1><h4>Technology stack</h4><list> Front End: HTML5 canvas and Javascript (Socket-io-client), Back End: Express with Socket-IO running with Node on an Amazon EC2 Linux Distro </list><h4>Features</h4><h5>Line clearing</h5><h5>Collision Detection</h5><list>With side & bottom walls,With other shapes,With side walls while rotating</list><h5>Shape Rotation</h5>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 64,
          projectId: 14,
          link: "https://images.jrdn.tech/tetris-0.gif",
        },
        {
          imageId: 65,
          projectId: 14,
          link: "https://images.jrdn.tech/tetris-0.JPG",
        },
      ],
      sourceLink: null,
      demoLink: "https://games.jrdn.tech/tetris",
      priority: 4,
    },
    {
      projectId: 13,
      title: "Hax Ball",
      description: "Soccer game remake using express and web sockets",
      markDown:
        "<h4>Objectives</h4><body1>The goal of this project was to explore web sockets with express using node. My friends and Iused to play an old flash soccer game called Haxball that inspired me to do this remake of it sinceI figured it'd be some what of a challenge to implement some of the math and 2d graphics. It's fully multiplayer but I never got around to adding in scoring or multiple games/rooms. </body1><h4>Technology stack</h4><list> Front End: HTML5 canvas and Javascript , Back End: Express with Socket-IO running on an Amazon EC2 Linux Distro </list><h4>Features</h4><h5>Fully multiplayer</h5><list>Any amount of players can join single game,Uses web sockets,High refresh rate with low latency</list><h5>Light physics engine </h5><list>Player & Ball collision,Ball kicking (with spacebar),Bounds collision,Ball and Player momentum</list>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 62,
          projectId: 13,
          link: "https://images.jrdn.tech/hax-0.JPG",
        },
        {
          imageId: 63,
          projectId: 13,
          link: "https://images.jrdn.tech/hax-1.JPG",
        },
      ],
      sourceLink: null,
      demoLink: "https://games.jrdn.tech/haxball",
      priority: 5,
    },
    {
      projectId: 10,
      title: "JWebsite Base Template",
      description:
        "Website base with user authentication and real time chatting built with React and .Net core",
      markDown:
        "<h4>\rObjectives\r</h4>\r<body1>\rThe main goal of this project was to create a solid website base that I could use for any future projects. \rI also wanted to explore some of the open source .net core features like entity framework core and signalR.\r</body1>\r<h4>\rTechnology stack\r</h4>\r<list>\r Front End: React & Redux with Material-UI styling deployed onto AWS S3 with Cloudfront,\r Back End: .Net Core 2.2 web api deployed on an AWS EC2 windows server instance running IIS,\r Database: PostgreSQL running on AWS RDS\r</list>\r<h4>\rFeatures\r</h4>\r<h5>\rUser Authentication\r</h5>\r<list>\r Uses JWT for a stateless design,\r Email comfirmation built in using JWT and AWS SES,\r Google OAuth optional for signing in / registering\r</list>\r<h5>\rLive Chat System\r</h5>\r<list>\r SignalR for web sockets\r Allows guests and authenticated users to communicate in real time\r</list>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 37,
          projectId: 10,
          link: "https://images.jrdn.tech/jweb-0.JPG",
        },
        {
          imageId: 38,
          projectId: 10,
          link: "https://images.jrdn.tech/jweb-1.JPG",
        },
        {
          imageId: 39,
          projectId: 10,
          link: "https://images.jrdn.tech/jweb-2.JPG",
        },
        {
          imageId: 40,
          projectId: 10,
          link: "https://images.jrdn.tech/jweb-3.JPG",
        },
        {
          imageId: 41,
          projectId: 10,
          link: "https://images.jrdn.tech/jweb-4.JPG",
        },
      ],
      sourceLink: null,
      demoLink: "https://jweb.jrdn.tech/",
      priority: 6,
    },
    {
      projectId: 12,
      title: "Data Hound",
      description: "Hackathon data analysis tool built using Spring and MySQL",
      markDown:
        "<h5>Detailed Write-up</h5><link>https://devpost.com/software/data-hound</link><h4>Objectives</h4><body1>My team and I created this project for a non-profit company through a Hackathonsponsored by Paypal. The company we picked for needed some type of tool to manage and analyze all of their seperate data in one place. We came up with this solution from scratch in twenty four hours. </body1><h4>Technology stack</h4><list> Front End: HTML, Bootstrap, Javascript, Google graphs api, Back End: Spring MVC running on Apache Tomcat, MySQL</list><h4>Features</h4><h5>User/Employee Authentication</h5><list>Employees must be pre approved by admins,Admins can manage all user accounts</list><h5>Dynamic Data importing</h5><list>Parses all csv files,Creates dynamic table in database based on data</list><h5>Data Manipulation</h5><list>Users can view all fields,Users can edit/delete all fields</list><h5>Data Analyzing</h5><list>Graphs generated dynamically based on data,User can select what fields to generate graphs with</list><h5>Data Exporting</h5><list>Data sets can be exported back to csv format</list>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 44,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-0.JPG",
        },
        {
          imageId: 45,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-15.JPG",
        },
        {
          imageId: 46,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-14.JPG",
        },
        {
          imageId: 47,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-13.JPG",
        },
        {
          imageId: 48,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-12.JPG",
        },
        {
          imageId: 49,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-11.JPG",
        },
        {
          imageId: 50,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-10.JPG",
        },
        {
          imageId: 51,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-9.JPG",
        },
        {
          imageId: 52,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-8.JPG",
        },
        {
          imageId: 53,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-7.JPG",
        },
        {
          imageId: 54,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-6.JPG",
        },
        {
          imageId: 55,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-5.JPG",
        },
        {
          imageId: 56,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-4.JPG",
        },
        {
          imageId: 57,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-3.JPG",
        },
        {
          imageId: 58,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-2.JPG",
        },
        {
          imageId: 59,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-1.JPG",
        },
        {
          imageId: 60,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-16.JPG",
        },
        {
          imageId: 61,
          projectId: 12,
          link: "https://images.jrdn.tech/dh-17.JPG",
        },
      ],
      sourceLink: "https://github.com/2018-Arizona-Opportunity-Hack/Team18",
      demoLink: "https://devpost.com/software/data-hound",
      priority: 7,
    },
    {
      projectId: 15,
      title: "CST-326 Lake House Scheduler",
      description:
        "Lake house property scheduling web app I worked on with a group for a school project using .NET Core and Razor pages.",
      markDown:
        "<h4>Objectives</h4><body1>I worked on this project for a group school project for a class on project management. Our group wasassigned to build a lake house property scheduling app for the teacher so she could rent our herlake house to friends and family. The whole project was developed through an agile project managementmethodology and we created a lot of documentation a long the way.</body1><h4>Technology stack</h4><list> Front End: HTML, Bootstrap, Razor pages, Back End: .NET core with a MSSQL database</list><h4>Features</h4><h5>User Authentication</h5><list>Users can sign up,Host can approve or deny users</list><h5>Reservation requesting</h5><list>Users can request a time slot to rent out the lake house,Hosts can view, approve, and deny requests</list><h5>Lake House details</h5><list>Users can view lake house information and pictures</list><h5>Reservation details</h5><list>Users can view their request status,Users can view calendar of reservations</list>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 66,
          projectId: 15,
          link: "https://images.jrdn.tech/lakehouse-0.JPG",
        },
        {
          imageId: 67,
          projectId: 15,
          link: "https://images.jrdn.tech/lakehouse-1.JPG",
        },
        {
          imageId: 68,
          projectId: 15,
          link: "https://images.jrdn.tech/lakehouse-2.JPG",
        },
      ],
      sourceLink: "https://github.com/ConnorJamesLow/Lakehouse",
      demoLink: null,
      priority: 8,
    },
    {
      projectId: 16,
      title: "P2P Web RTC Voice Chat (Discord remake)",
      description:
        "Peer to Peer voice chat app built with web sockets and peerjs ontop of node and WebRTC",
      markDown:
        "<h4>Objectives</h4><body1>I created this project to learn more about the WebRTC protocol and peer to peer connections in browsers.The UI has a discord theme and gives users the option to chat with text or through their microphones aftergranting the browser access. Signaling is done via web sockets.</body1><h4>Technology stack</h4><list> Front End: React with peerjs, socket-io, and hark (for volume detection), Back End: Express with peerjs and socket-io</list><h4>Features</h4><h5>Voice chat</h5><list>Users can be muted,Users can mute themselves,Usernames are highlighted when volume is coming from their mic</list><h5>Text Chat</h5><list>Users can send messages</list>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 69,
          projectId: 16,
          link: "https://images.jrdn.tech/discord-0.JPG",
        },
      ],
      sourceLink: null,
      demoLink: null,
      priority: 9,
    },
    {
      projectId: 17,
      title: "2D Tile Based Path finder",
      description:
        "2D Tile based path finder java applet with custom sprite animation system",
      markDown:
        "<h4>Objectives</h4><body1>The goal of this project was to implement the A* pathfinding solution into a light weightcustom 2D engine that I created using a java applet and the java 2d graphics library. I alsoused some free game sprites online and created my own animation and map rendering system as well.</body1><h4>Technology stack</h4><list> Java Applet, Java 2D Graphics library</list><h4>Features</h4><h5>A* Pathfinding</h5><h5>Movement Animations</h5><list>Animations use sprites,Custom animation config files</list><h5>Tile Based Object Rendering</h5><list>Map can be customized,Map config file for objects,</list>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 70,
          projectId: 17,
          link: "https://images.jrdn.tech/2dp-0.gif",
        },
      ],
      sourceLink: null,
      demoLink: null,
      priority: 10,
    },
  ],
}
