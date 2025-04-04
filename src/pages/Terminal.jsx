import React from 'react';
import Terminal from 'react-console-emulator';

export default function MyTerminal() {
  const commands = {
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    },
    whoami: {
      description: 'Displays user info',
      usage: 'whoami',
      fn: () => `Jayprakash Malik - Backend Developer. He loves to work with Node.js, Express.js and MongoDB. Currently pursuing Bachelor of Computer Applications (BCA) degree in Presidency University, Bengaluru, Karnataka, India`
    },
    email: {
      description: 'Send an Email to Jayprakash',
      usage: 'email',
      fn: () => {
        setTimeout(() => window.open('mailto:dev.jayh4@gmail.com', '_blank'), 100);
        return 'Opening Mail...';
      }
    },
    github: {
      description: 'Opens GitHub profile',
      usage: 'github',
      fn: () => {
        setTimeout(() => window.open('https://github.com/Tyler7x1', '_blank'), 100);
        return 'Opening GitHub...';
      }
    },
    linkedin: {
      description: 'Opens LinkedIn profile',
      usage: 'linkedin',
      fn: () => {
        setTimeout(() => window.open('https://www.linkedin.com/in/jayprakash-malik/', '_blank'), 100);
        return 'Opening LinkedIn...';
      }
    },
    website: {
      description: 'Opens portfolio website',
      usage: 'website',
      fn: () => {
        setTimeout(() => window.open('https://jayprakash-malik.vercel.app', '_blank'), 100);
        return 'Opening Portfolio...';
      }
    },
    skills: {
      description: `Lists Jayprakash's skills`,
      usage: 'skills',
      fn: () =>
        `Node.js, Express.js, MongoDB, React (Basic), TypeScript (Basic), Docker, Redis`
    },
    projects: {
      description: `Display projects built by Jayprakash`,
      usage: 'projects',
      fn: () =>
        `1. EmpManage - Basic CRUD API with MongoDB for managing employees.\n
        [Repo Link] => https://github.com/Tyler7x1/EmpManage\n` +
        `2. FloodSense - A web app displaying real-time IoT sensor data.\n
        [Repo Link] => https://github.com/Tyler7x1/FloodSense\n` +
        `3. MetaBucket - A Node.js app for routing file uploads to Google Drive.\n
        [Repo Link] => https://github.com/Soujanya2004/Google-Cloud-Storage/tree/jay\n` +
        `4. Echo Relay (Ongoing) - File sharing web app using multiple Google Drive APIs.\n
        [Repo Link] => https://github.com/theoneandonlyshadow/Echo-Relay\n` +
        `5. Portfolio Website - Built with React + Vite, styled using Tailwind CSS.\n
        [Repo Link] => https://github.com/Tyler7x1/my-portfolio`
    },
    socials: {
      description: 'Shows all social links',
      usage: 'socials',
      fn: () =>
        `GitHub: https://github.com/Tyler7x1\n` +
        `LinkedIn: https://www.linkedin.com/in/jayprakash-malik/\n` +
        `Website: https://jayprakash-malik.vercel.app`
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black/90 p-4">
      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-md p-4 md:p-6 rounded-lg md:rounded-2xl shadow-xl border border-white/10">
        <Terminal
          key="terminal-instance"
          commands={commands}
          promptLabel={'jayprakash@sudo:~$'}
          className="terminal"
          style={{
            backgroundColor: 'transparent',
            color: '#e2e8f0',
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.875rem',
            lineHeight: '1.5',
            height: '60vh',
            maxHeight: '500px',
            overflowY: 'auto',
            width: '100%',
          }}
          contentStyle={{
            color: '#93c5fd',
            fontSize: '0.875rem',
            fontFamily: "'Fira Code', monospace",
            lineHeight: '1.5',
            padding: '0.5rem',
          }}
          promptLabelStyle={{
            color: '#60a5fa',
            fontWeight: 'bold',
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
          inputTextStyle={{
            color: '#facc15',
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
          inputAreaStyle={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem',
          }}
        />
      </div>
    </section>
  );
}