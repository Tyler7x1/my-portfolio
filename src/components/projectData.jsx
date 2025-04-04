import {
    SiNodedotjs, SiExpress, SiMongodb, SiEjs, SiArduino,
    SiGoogledrive, SiAxios, SiTailwindcss, SiSocketdotio
  } from 'react-icons/si';
  
  import empManageImage from '../assets/EmpManage.png';
  import floodSenseImage from '../assets/FloodSense.png';
  import metaBucketImage from '../assets/MetaBucket.png';
  import echoRelayImage from '../assets/echorelay.png';
  
  export const techIcons = {
    "Node.js": <SiNodedotjs className="text-green-500 text-2xl" />,
    "Express.js": <SiExpress className="text-gray-300 text-2xl" />,
    "MongoDB": <SiMongodb className="text-green-600 text-2xl" />,
    "EJS": <SiEjs className="text-yellow-500 text-2xl" />,
    "Arduino (C++)": <SiArduino className="text-blue-500 text-2xl" />,
    "Google Drive API": <SiGoogledrive className="text-green-500 text-2xl" />,
    "Axios": <SiAxios className="text-purple-500 text-2xl" />,
    "Tailwind CSS": <SiTailwindcss className="text-teal-400 text-2xl" />,
    "WebSocket": <SiSocketdotio className="text-yellow-400 text-2xl" />
  };
  
  export const projects = [
      {
          name: "EmpManage",
          description: "Basic CRUD API with MongoDB connection that allows for the creation, retrieval, update, and deletion of user accounts.",
          technologies: ["Node.js", "Express.js", "MongoDB", "EJS"],
          repo: "https://github.com/Tyler7x1/EmpManage",
          image: empManageImage,
          completed: true
      },
      {
          name: "FloodSense",
          description: "A web app that displays real-time IoT sensor data.",
          technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Arduino (C++)"],
          repo: "https://github.com/Tyler7x1/FloodSense",
          image: floodSenseImage,
          completed: true
      },
      {
          name: "Meta Bucket",
          description: "A Node.js application that routes file uploads to the Google Drive account.",
          technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Google Drive API", "Axios"],
          repo: "https://github.com/Soujanya2004/Google-Cloud-Storage/tree/jay",
          image: metaBucketImage,
          completed: true
      },
      {
          name: "Echo Relay",
          description: "File sharing web app with storage connecting to multiple Google Drive APIs.",
          technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Tailwind CSS", "Google Drive API", "Axios", "WebSocket"],
          repo: "https://github.com/theoneandonlyshadow/Echo-Relay",
          image: echoRelayImage,
          completed: false
      }
  ];