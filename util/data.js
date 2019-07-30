module.exports = {
  projects: [
    {
      projectId: 23,
      title: "WebRTC Real-time Conferencing",
      description:
        "WebRTC conferencing platform with support for video and audio chatting in a room based system.",
      markDown:
        "<h4>\n    Objectives\n</h4>\n<body1>\n    The goal of this project was to build something with the WebRTC protocol. I did some research and decided to use the open source Kurento Media server for \n\tthe media aspect of the project since it's free and supports WebRTC selective forwarding. I decided to build the application/signaling server in .net core \nsince it's my go-to framework. I decided to also learn react hooks in this project as I built out the front-end.   \n</body1>\n<h4>\n    Technology stack\n</h4>\n<list>\n     Front End: React (16.8.6 with hooks), Redux for state management, and Material UI for styling,\n     Back End (application / signaling server): asp.net core 2.2,\n     Back End (media server): Kurento Media Server,\n     Back End (turn server): Coturn\n</list>\n<h4>\n    Features\n</h4>\n<h5>\n    Real-time conferencing\n</h5>\n<list>\n    Video/web cam chat support,\n    Audio chat support,\n    Text-based chat support,\npublic / private room based system\n</list>\n<h5>\n    Low-latency scalable media server \n</h5>\n<list>\n    Uses Selective forwarding unit instead of P2P to cut down on client bandwidth,\n    Signaling server communicates with media server via JSON-RPC,\n    Deployed on an AWS ec2 ubuntu instance\n</list>\n",
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
        "<h4>\n    Objectives\n</h4>\n<body1>\n    The goal of this project was to create an online radio for people to listen to Youtube and Soundcloud music together. The inspiration for this\n    came from lifting with friends at the gym and wanting some type of free cross-platform service for listening to music/mixes together at a synchronized\n    rate. I decided that the easiest way to create this radio was to make the front-end a responsive web app. I made the back-end with express.  \n</body1>\n<h4>\n    Technology stack\n</h4>\n<list>\n     Front End: React with Material UI being rendered server-side by Next.js,\n     Back End: Express back-end running on an Amazon Linux EC2 instance\n</list>\n<h4>\n    Features\n</h4>\n<h5>\n    Supports all valid Youtube links\n</h5>\n<h5>\n    Supports all valid Soundcloud links \n</h5>\n<list>\n    Music downloads and streams to listeners at synchronized time,\n    Audio is disposed of when song is done playing,\n    Songs can be skipped\n</list>\n<h5>\n    Live user chat\n</h5>\n<list>\n    Real-time,\n    Uses web sockets\n</list>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 42,
          projectId: 11,
          link: "http://images.jrdn.tech/radio-0.JPG",
        },
        {
          imageId: 43,
          projectId: 11,
          link: "http://images.jrdn.tech/radio-1.JPG",
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
        "<h4>\n    Objectives\n</h4>\n<body1>\nThe goal of this project was to create an employee status management system for a professional company. They requested a central system where their employees could login to and update or view their current availability statuses. They requested that the web application be accessible on mobile as well as desktop. They also requested that users be able to enter a schedule or update their status manually. \n</body1>\n<h4>\n    Technology stack\n</h4>\n<list>\n     Front End: React with Material UI on AWS S3, \n     Back End: .NET core 2.2 web api on AWS ec2,\n     Database: PostgreSQL on AWS RDS\n</list>\n<h4>\n    Features\n</h4>\n<h5>\n    User authentication\n</h5>\n<h5>\n    Dynamically updating user status schedules\n</h5>\n<h5>\n    Admin panel for user / location management\n</h5>\n",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 83,
          projectId: 22,
          link: "http://images.jrdn.tech/mm-0.JPG",
        },
        {
          imageId: 84,
          projectId: 22,
          link: "http://images.jrdn.tech/mm-1.JPG",
        },
        {
          imageId: 85,
          projectId: 22,
          link: "http://images.jrdn.tech/mm-2.JPG",
        },
        {
          imageId: 86,
          projectId: 22,
          link: "http://images.jrdn.tech/mm-3.JPG",
        },
        {
          imageId: 87,
          projectId: 22,
          link: "http://images.jrdn.tech/mm-4.JPG",
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
        "<h4>\n    Objectives\n</h4>\n<body1>\n    The goal of this project was to create a live streaming platform by plugging together open source technologies and wrapping it all\n together with a nice React UI.   \n</body1>\n<h4>\n    Technology stack\n</h4>\n<list>\n     Front End: React with Material UI (Razzle.js for SSR),\n     Back End: .net core 2.2, nginx compiled with rtmp module, and postgresql database\n</list>\n<h4>\n    Features\n</h4>\n<h5>\n    User registration / authentication / stream keys\n</h5>\n<h5>\n    RTMP live streaming\n</h5>\n<list>\n    Stream from any standard RTMP client like OBS,\n    Small delays,\n    Thumbnails captured when stream starts\n</list>\n<h5>\n    Live user chat\n</h5>\n<list>\n    Real-time,\n    Uses signalR\n</list>\n<h5>\nFully responsive UI\n</h5>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 78,
          projectId: 21,
          link: "http://images.jrdn.tech/live-0.JPG",
        },
        {
          imageId: 79,
          projectId: 21,
          link: "http://images.jrdn.tech/live-1.JPG",
        },
        {
          imageId: 80,
          projectId: 21,
          link: "http://images.jrdn.tech/live-2.JPG",
        },
        {
          imageId: 81,
          projectId: 21,
          link: "http://images.jrdn.tech/live-3.JPG",
        },
        {
          imageId: 82,
          projectId: 21,
          link: "http://images.jrdn.tech/live-4.JPG",
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
        "<h4>\n    Objectives\n</h4>\n<body1>\n    The goal of this project was to explore web sockets with express using node. I decided to re-make Tetris \n    since it's an easy yet challenging game concept to implement. I used web sockets instead of a completely\n    client side solution because my original plan was to make the game multi-player. After implementing all of the\n    core game logic, I decided to start working on something else instead of adding a multi-player mode.\n</body1>\n<h4>\n    Technology stack\n</h4>\n<list>\n     Front End: HTML5 canvas and Javascript (Socket-io-client),\n     Back End: Express with Socket-IO running with Node on an Amazon EC2 Linux Distro \n</list>\n<h4>\n    Features\n</h4>\n<h5>\n    Line clearing\n</h5>\n<h5>\n    Collision Detection\n</h5>\n<list>\n    With side & bottom walls,\n    With other shapes,\n    With side walls while rotating\n</list>\n<h5>\n    Shape Rotation\n</h5>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 64,
          projectId: 14,
          link: "http://images.jrdn.tech/tetris-0.gif",
        },
        {
          imageId: 65,
          projectId: 14,
          link: "http://images.jrdn.tech/tetris-0.JPG",
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
        "<h4>\n    Objectives\n</h4>\n<body1>\n    The goal of this project was to explore web sockets with express using node. My friends and I\n    used to play an old flash soccer game called Haxball that inspired me to do this remake of it since\n    I figured it'd be some what of a challenge to implement some of the math and 2d graphics. It's fully \n    multiplayer but I never got around to adding in scoring or multiple games/rooms. \n</body1>\n<h4>\n    Technology stack\n</h4>\n<list>\n     Front End: HTML5 canvas and Javascript ,\n     Back End: Express with Socket-IO running on an Amazon EC2 Linux Distro \n</list>\n<h4>\n    Features\n</h4>\n<h5>\n    Fully multiplayer\n</h5>\n<list>\n    Any amount of players can join single game,\n    Uses web sockets,\n    High refresh rate with low latency\n</list>\n<h5>\n    Light physics engine \n</h5>\n<list>\n    Player & Ball collision,\n    Ball kicking (with spacebar),\n    Bounds collision,\n    Ball and Player momentum\n</list>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 62,
          projectId: 13,
          link: "http://images.jrdn.tech/hax-0.JPG",
        },
        {
          imageId: 63,
          projectId: 13,
          link: "http://images.jrdn.tech/hax-1.JPG",
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
        "<h4>\r\n    Objectives\r\n</h4>\r\n<body1>\r\n    The main goal of this project was to create a solid website base that I could use for any future projects. \r\n    I also wanted to explore some of the open source .net core features like entity framework core and signalR.\r\n</body1>\r\n<h4>\r\n    Technology stack\r\n</h4>\r\n<list>\r\n     Front End: React & Redux with Material-UI styling deployed onto AWS S3 with Cloudfront,\r\n     Back End: .Net Core 2.2 web api deployed on an AWS EC2 windows server instance running IIS,\r\n     Database: PostgreSQL running on AWS RDS\r\n</list>\r\n<h4>\r\n    Features\r\n</h4>\r\n<h5>\r\n    User Authentication\r\n</h5>\r\n<list>\r\n     Uses JWT for a stateless design,\r\n     Email comfirmation built in using JWT and AWS SES,\r\n     Google OAuth optional for signing in / registering\r\n</list>\r\n<h5>\r\n    Live Chat System\r\n</h5>\r\n<list>\r\n     SignalR for web sockets\r\n     Allows guests and authenticated users to communicate in real time\r\n</list>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 37,
          projectId: 10,
          link: "http://images.jrdn.tech/jweb-0.JPG",
        },
        {
          imageId: 38,
          projectId: 10,
          link: "http://images.jrdn.tech/jweb-1.JPG",
        },
        {
          imageId: 39,
          projectId: 10,
          link: "http://images.jrdn.tech/jweb-2.JPG",
        },
        {
          imageId: 40,
          projectId: 10,
          link: "http://images.jrdn.tech/jweb-3.JPG",
        },
        {
          imageId: 41,
          projectId: 10,
          link: "http://images.jrdn.tech/jweb-4.JPG",
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
        "\n<h5>\n    Detailed Write-up\n</h5>\n<link>\n        https://devpost.com/software/data-hound\n</link>        \n<h4>\n    Objectives\n</h4>\n<body1>\n    My team and I created this project for a non-profit company through a Hackathon\n    sponsored by Paypal. The company we picked for needed some type of tool to \n    manage and analyze all of their seperate data in one place. We came up with this \n    solution from scratch in twenty four hours. \n\n</body1>\n<h4>\n    Technology stack\n</h4>\n<list>\n     Front End: HTML, Bootstrap, Javascript, Google graphs api,\n     Back End: Spring MVC running on Apache Tomcat, MySQL\n</list>\n<h4>\n    Features\n</h4>\n<h5>\n    User/Employee Authentication\n</h5>\n<list>\n    Employees must be pre approved by admins,\n    Admins can manage all user accounts\n</list>\n<h5>\n    Dynamic Data importing\n</h5>\n<list>\n    Parses all csv files,\n    Creates dynamic table in database based on data\n</list>\n<h5>\n    Data Manipulation\n</h5>\n<list>\n    Users can view all fields,\n    Users can edit/delete all fields\n</list>\n<h5>\n    Data Analyzing\n</h5>\n<list>\n    Graphs generated dynamically based on data,\n    User can select what fields to generate graphs with\n</list>\n<h5>\n    Data Exporting\n</h5>\n<list>\n    Data sets can be exported back to csv format\n</list>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 44,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-0.JPG",
        },
        {
          imageId: 45,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-15.JPG",
        },
        {
          imageId: 46,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-14.JPG",
        },
        {
          imageId: 47,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-13.JPG",
        },
        {
          imageId: 48,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-12.JPG",
        },
        {
          imageId: 49,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-11.JPG",
        },
        {
          imageId: 50,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-10.JPG",
        },
        {
          imageId: 51,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-9.JPG",
        },
        {
          imageId: 52,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-8.JPG",
        },
        {
          imageId: 53,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-7.JPG",
        },
        {
          imageId: 54,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-6.JPG",
        },
        {
          imageId: 55,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-5.JPG",
        },
        {
          imageId: 56,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-4.JPG",
        },
        {
          imageId: 57,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-3.JPG",
        },
        {
          imageId: 58,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-2.JPG",
        },
        {
          imageId: 59,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-1.JPG",
        },
        {
          imageId: 60,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-16.JPG",
        },
        {
          imageId: 61,
          projectId: 12,
          link: "http://images.jrdn.tech/dh-17.JPG",
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
        "<h4>\n    Objectives\n</h4>\n<body1>\n    I worked on this project for a group school project for a class on project management. Our group was\n    assigned to build a lake house property scheduling app for the teacher so she could rent our her\n    lake house to friends and family. The whole project was developed through an agile project management\n    methodology and we created a lot of documentation a long the way.\n</body1>\n<h4>\n    Technology stack\n</h4>\n<list>\n     Front End: HTML, Bootstrap, Razor pages,\n     Back End: .NET core with a MSSQL database\n</list>\n<h4>\n    Features\n</h4>\n<h5>\n    User Authentication\n</h5>\n<list>\n    Users can sign up,\n    Host can approve or deny users\n</list>\n<h5>\n    Reservation requesting\n</h5>\n<list>\n    Users can request a time slot to rent out the lake house,\n    Hosts can view, approve, and deny requests\n</list>\n<h5>\n    Lake House details\n</h5>\n<list>\n    Users can view lake house information and pictures\n</list>\n<h5>\n    Reservation details\n</h5>\n<list>\n    Users can view their request status,\n    Users can view calendar of reservations\n</list>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 66,
          projectId: 15,
          link: "http://images.jrdn.tech/lakehouse-0.JPG",
        },
        {
          imageId: 67,
          projectId: 15,
          link: "http://images.jrdn.tech/lakehouse-1.JPG",
        },
        {
          imageId: 68,
          projectId: 15,
          link: "http://images.jrdn.tech/lakehouse-2.JPG",
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
        "<h4>\n    Objectives\n</h4>\n<body1>\n    I created this project to learn more about the WebRTC protocol and peer to peer connections in browsers.\n    The UI has a discord theme and gives users the option to chat with text or through their microphones after\n    granting the browser access. Signaling is done via web sockets.\n</body1>\n<h4>\n    Technology stack\n</h4>\n<list>\n     Front End: React with peerjs, socket-io, and hark (for volume detection),\n     Back End: Express with peerjs and socket-io\n</list>\n<h4>\n    Features\n</h4>\n<h5>\n    Voice chat\n</h5>\n<list>\n    Users can be muted,\n    Users can mute themselves,\n    Usernames are highlighted when volume is coming from their mic\n</list>\n<h5>\n    Text Chat\n</h5>\n<list>\n    Users can send messages\n</list>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 69,
          projectId: 16,
          link: "http://images.jrdn.tech/discord-0.JPG",
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
        "<h4>\n    Objectives\n</h4>\n<body1>\n    The goal of this project was to implement the A* pathfinding solution into a light weight\n    custom 2D engine that I created using a java applet and the java 2d graphics library. I also\n    used some free game sprites online and created my own animation and map rendering system as well.\n</body1>\n<h4>\n    Technology stack\n</h4>\n<list>\n     Java Applet,\n     Java 2D Graphics library\n</list>\n<h4>\n    Features\n</h4>\n<h5>\n    A* Pathfinding\n</h5>\n<h5>\n    Movement Animations\n</h5>\n<list>\n    Animations use sprites,\n    Custom animation config files\n</list>\n<h5>\n    Tile Based Object Rendering\n</h5>\n<list>\n    Map can be customized,\n    Map config file for objects,\n</list>",
      createdOn: "0001-01-01T00:00:00",
      modifiedOn: "0001-01-01T00:00:00",
      status: "active",
      images: [
        {
          imageId: 70,
          projectId: 17,
          link: "http://images.jrdn.tech/2dp-0.gif",
        },
      ],
      sourceLink: null,
      demoLink: null,
      priority: 10,
    },
  ],
}
